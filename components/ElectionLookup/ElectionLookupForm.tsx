import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

import CopyButton from '../CopyButton'
import DownloadPosterButton from '../DownloadPosterButton'
import ShareButton from '../ShareButton'
import LookupPostcode from './LookupPostcode'
import SelectAddress from './SelectAddress'
import { getPathFromElectionId } from '../../lib/democracyClub/electionIdHelpers'
import { AddressData } from '../../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

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
            <Link href="/reminders">Get alerts</Link> if you can&apos;t do this right now.
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
          <p className="mb-5">
            <strong>Looks like there&apos;s not a council election in your area on Thursday 4th May *</strong>
            <br />
            <i>* We don&apos;t cover Parish, Community or Town Council elections - <a href="https://www.gov.uk/understand-how-your-council-works" target="_blank" rel="noreferrer">find out more about the different types of Local Council</a></i>
            <br />
            <br />
            <Link href="/about#missing-elections">
              <strong>Are we missing your council election? Let us know!</strong>
            </Link>
          </p>

          <p>
            <strong>Even if you don&apos;t have an election, you can help Stop The Tories by spreading the word!</strong>
          </p>
          <div style={{ minWidth: "340px", maxWidth: "450px" }}>
            <div className="btn-group-vertical mb-3 w-100" role="group">
              <ShareButton
                url="https://stopthetories.vote"
                shareTitle="Stop The Tories on May 4th"
                shareText="Vote tactically to take back your local council!"
              />
              <CopyButton
                textToCopy="https://stopthetories.vote"
                buttonText="Copy link to share this page"
                onClickButtonText="Link copied - now share it!"
              />
              <DownloadPosterButton />
              <Link href="/donate" className="btn btn-primary btn-lg" role="button">
                <FontAwesomeIcon icon={faHandHoldingHeart} fixedWidth className="fas text-white" />
                Help keep this site running
              </Link>
            </div>
          </div>

          <p className="mt-4">
            <a href="#" onClick={() => setStep('LOOKUP_POSTCODE')}>
              Lookup a different postcode
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
