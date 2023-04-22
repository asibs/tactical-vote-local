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
      <div className="d-flex flex-wrap my-3">
        <div className="me-2" style={{ maxWidth: "350px" }}>
          <select
            id="addressInput"
            className="form-control form-control-lg"
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
        <div>
          <button
            className="btn btn-dark btn-lg ms-2"
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
        </div>
      )}
    </>
  );
}
