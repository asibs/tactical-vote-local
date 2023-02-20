import React from 'react'
import Link from 'next/link'

import { Permanent_Marker } from '@next/font/google'

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

interface Props {
  showTagline?: boolean
  children: React.ReactNode
}

export default function Layout({ showTagline=true, children }: Props) {
  return (
    <div id="wrapper">
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container-md">
          <Link className={`${permanentMarker.className} navbar-brand`} href="#">Vote Smart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">Find my council</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div className="container-md pt-3 px-3">
          {/* (OPTIONAL) TAGLINE */}
          {showTagline && (
            <div className="text-center mx-auto my-3" style={{ maxWidth: '375px' }}>
              <h1 className={permanentMarker.className}>
                <span>Vote </span>
                <span className="highlight">Smart</span>
              </h1>
              <h3 className={permanentMarker.className}>
                to turf out the Tories
              </h3>
            </div>
          )}

          {/* MAIN PAGE */}
          {children}
        </div>
      </main>

      <footer className="bg-dark">
        <div className="container-md">
          <section id="social" className="my-3 text-center">
            <a className="link-light m-1" href="https://www.facebook.com/">
              <i className="bi-facebook" style={{ fontSize: '1.5rem' }}></i>
            </a>

            <a className="link-light m-1" href="https://www.twitter.com/">
              <i className="bi-twitter" style={{ fontSize: '1.5rem' }}></i>
            </a>

            <a className="link-light m-1" href="https://www.tiktok.com/">
              <i className="bi-tiktok" style={{ fontSize: '1.5rem' }}></i>
            </a>

            <a className="link-light m-1" href="https://www.instagram.com/">
              <i className="bi-instagram" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </section>
        </div>

        <hr className="my-3" />

        <div
          id="copyright"
          className="text-center my-3"
        >
          © 2023 Copyright VoteSmart
        </div>
      </footer>
    </div>
  )
}
