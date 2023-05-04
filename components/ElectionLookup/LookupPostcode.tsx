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
      <div className="my-3" style={{ maxWidth: "374px" }}>
        <div className="my-3">
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
