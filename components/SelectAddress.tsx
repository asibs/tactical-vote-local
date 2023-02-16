import React from 'react'
import Link from 'next/link'

interface Props {
  addresses: Array<AddressData>
  selectedAddress: string
  setSelectedAddress: (value: string) => void
  loading: boolean
  error: boolean
  onClick: () => void
}

export default function LookupPostcode({
  addresses,
  selectedAddress,
  setSelectedAddress,
  loading,
  error,
  onClick,
}: Props) {
  return (
    <div className="input-group input-group-lg mb-3">
      <div className="container">

        <div className="row">
          <div className="col">
            <label htmlFor="addressInput" className="form-label">Select your address:</label>
          </div>
        </div>

        <div className="row gx-0">
          <div className="col-9 col-md-10">
            <select
              id="addressInput"
              className="form-select"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {addresses.map(address => {
                return (
                  <option key={address.slug} value={address.slug}>{address.address}</option>
                )
              })}
            </select>
          </div>
          <div className="col col-3 col-md-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={onClick}
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
