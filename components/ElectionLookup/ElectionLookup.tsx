import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

import LookupPostcode from './LookupPostcode'
import SelectAddress from './SelectAddress'
import { getPathFromElectionId } from '../../lib/democracyClub/electionIdHelpers'
import { AddressData } from '../../types'

type Step = 'LOOKUP_POSTCODE' | 'SELECT_ADDRESS' | 'NO_ELECTION'

export default function ElectionLookup() {
  const [step, setStep] = useState<Step>('LOOKUP_POSTCODE')

  const [loading, setLoading] = useState(false)

  const DEFAULT_ERROR_MESSAGE = "Oops, something went wrong. Please try entering your postcode again."
  const [error, setError] = useState('')

  const [postcode, setPostcode] = useState('')
  const [addresses, setAddresses] = useState<Array<AddressData>>([])
  const [selectedAddress, setSelectedAddress] = useState('')

  const router = useRouter()

  const lookupAddress = () => {
    setLoading(true)
    setError('')

    axios.get('/api/postcodeLookup', {
      params: {
        postcode: postcode,
        addressSlug: selectedAddress,
      }
    }).then(function (response) {
      console.log("Success", response.data)

      if (response.data.addressPicker) {
        console.log("Got some addresses!", response.data.addresses)
        setAddresses(response.data.addresses)
        setSelectedAddress(response.data.addresses[0]?.slug)
        setStep('SELECT_ADDRESS')
        setLoading(false)
      } else if (response.data.featuredBallot) {
        console.log("Found the ward & ballot!", response.data.featuredBallot)
        // Redirect to the council/ward page
        try {
          const path = getPathFromElectionId(response.data.featuredBallot.ballotPaperId)
          console.log(`Redirecting to ${path}`)
          router.push(path)
          // TODO: pass on otherBallots as a URL param so they can be shown as well as the local election?
        } catch (error) {
          handleError(DEFAULT_ERROR_MESSAGE)
        }
      } else {
        // Found the ward, but no featuredBallot
        console.log("Found the ward with no ballot!")
        setStep('NO_ELECTION')
        setLoading(false)
      }
    }).catch(function(error) {
      handleError(error?.response?.data?.userError)
    })
  }

  const handleError = (errorMessage: string) => {
    setError(errorMessage || DEFAULT_ERROR_MESSAGE)
    setStep('LOOKUP_POSTCODE')
    setLoading(false)
  }

  return (
    <div>
      <h3>How to vote tactically in your area</h3>

      {step === 'LOOKUP_POSTCODE' && (
        <>
          <LookupPostcode
            postcode={postcode}
            setPostcode={setPostcode}
            loading={loading}
            error={error}
            onClick={lookupAddress}
          />

          <p>
            <Link href="/reminders">Get reminders</Link> if you can't do this right now.
          </p>
        </>
      )}

      {step === 'SELECT_ADDRESS' && (
        <SelectAddress
          addresses={addresses}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          loading={loading}
          error={error}
          onClick={lookupAddress}
        />
      )}

      {step === 'NO_ELECTION' && (
        <div className="my-3">
          <p>Looks like you don&apos;t have a local election on Thursday 4th May</p>
          <p>
            <a href="#" onClick={() => setStep('LOOKUP_POSTCODE')}>
              Lookup a different postcode
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
