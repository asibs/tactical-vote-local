import React from 'react'
import Link from 'next/link'

import { AddressData } from '../types'

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
    <div className="input-group input-group-lg mb-3">
      <div className="container" style={{ maxWidth: '576px' }}>

        <div className="row">
          <div className="col">
            <label htmlFor="addressInput" className="form-label">Select your address:</label>
          </div>
        </div>

        <div className="row gx-0">
          <div className="col-9 col-sm-10">
            <select
              id="addressInput"
              className="form-select"
              style={{ backgroundColor: '#EEEEEE' }}
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
          <div className="col col-3 col-sm-2">
            <button
              type="button"
              className="btn btn-primary w-100"
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
                'Go »'
              )}
            </button>
          </div>
        </div>

        <div className="row mt-3">
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

      </div>
    </div>
  );
}
