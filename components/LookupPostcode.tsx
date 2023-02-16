import React from 'react'
import Link from 'next/link'

interface Props {
  postcode: string
  setPostcode: (value: string) => void
  loading: boolean
  error: boolean
  onClick: () => void
}

export default function LookupPostcode({
  postcode,
  setPostcode,
  loading,
  error,
  onClick,
}: Props) {
  return (
    <div className="input-group input-group-lg mb-3">
      <div className="container">

        <div className="row">
          <div className="col">
            <label htmlFor="postcodeInput" className="form-label">Enter your postcode:</label>
          </div>
        </div>

        <div className="row gx-0">
          <div className="col-9 col-md-10">
            <input
              type="email"
              className="form-control"
              id="postcodeInput"
              placeholder="SW1A 1AA"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
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