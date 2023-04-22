import React from 'react'
import Link from 'next/link'

interface Props {
  postcode: string
  setPostcode: (value: string) => void
  loading: boolean
  error: string
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
    <>
      <div className="d-flex flex-wrap my-3">
        <div className="me-2" style={{ maxWidth: "350px" }}>
          <input
            id="postcodeInput"
            className="form-control form-control-lg"
            type="search"
            placeholder="Your Postcode"
            name="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            disabled={loading}
          />
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
