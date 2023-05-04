import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/stop-the-tories-logo-transparent.png'

export default function Navbar() {
  return (
    <div className="container-fluid sticky-top" style={{ background: "var(--bs-gray-100)" }}>
      <div className="row">
        <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2">
          <nav className="navbar navbar-light navbar-expand py-3">
            <div className="container-fluid px-0">

              <Link href="/" className="navbar-brand d-flex align-items-center">
                <span className="bs-icon-sm d-flex justify-content-center align-items-center me-2 bs-icon">
                  <Image src={logo} alt="StopTheTories.vote logo" style={{ width: "2rem", height: "2rem" }} />
                </span>
                <span>StopTheTories<strong>.<em>Vote</em></strong></span>
              </Link>

              <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav ms-auto"></ul>
                <Link href="/reminders" className="btn btn-primary btn-sm ms-md-2" role="button">
                  <FontAwesomeIcon icon={faBell} />Remind me
                </Link>
              </div>

            </div>
          </nav>
        </div>
      </div>
      <div class="alert alert-danger" role="alert">
        Our postcode lookup currently isn&apos;t working due to heavy load - we hope to have it back online again as soon as possible!
        <br />
        If you know which council & ward you are in, you can <Link href="/local">browse the list</Link> yourself.
      </div>
    </div>
  )
}
