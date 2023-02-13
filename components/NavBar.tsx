import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">Tactical Vote Local</Link>
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
  );
}
