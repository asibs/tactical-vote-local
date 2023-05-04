import React from 'react'
import Link from 'next/link'

import { AddressData } from '../../types'

interface Props {
  addresses: Array<AddressData>
  selectedAddress: string
  setSelectedAddress: (value: string) => void
  loading: boolean
  error: string
  onClick: () => void
}

export default function SelectAddress({
  addresses,
  selectedAddress,
  setSelectedAddress,
  loading,
  error,
  onClick,
}: Props) {
  return (
    <>
      <div className="my-3" style={{ maxWidth: "374px" }}>
        <div className="my-3">
          <select
            id="addressInput"
            className="form-select form-select-lg"
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            disabled={loading}
          >
            {addresses.map(address => {
              return (
                <option key={address.slug} value={address.slug}>{address.address}</option>
              )
            })}
          </select>
        </div>
        <div className="my-3">
          <button
            className="btn btn-dark btn-lg"
            style={{ width: "33%" }}
            role="button"
            onClick={onClick}
            disabled={loading}
          >
            {loading
            ? (
              <div className="spinner-border spinner-border-sm text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
            : (
              'Go'
            )}
          </button>
        </div>
      </div>

      <div className="mt-3">
        <p>
          <a data-bs-toggle="collapse" href="#addressExplainer" role="button" aria-expanded="false" aria-controls="addressExplainer">
            Why do you need my address?
          </a>
        </p>
        <div className="collapse" id="addressExplainer">
          Not all of the households in your postcode are part of the same council or ward.
          We need to know the full address to accurately work out which council & ward you
          live in. We never store this information.
        </div>
      </div>

      {error && (
        <div className="row">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          {/* TEMP for election day, as we've had some DemoClub API issues */}
          <div className="alert alert-danger" role="alert">
            We&apos;re experiencing heavy traffic - if the postcode lookup doesn&apos;t work, try again in a few minutes!
            <br />
            If you know which council & ward you&apos;re in, you can <Link href="/local">browse the list</Link> to find yours.
          </div>
        </div>
      )}
    </>
  );
}
