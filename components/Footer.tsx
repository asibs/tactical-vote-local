import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from './Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faSearch,
  faFileDownload,
  faVoteYea,
} from '@fortawesome/free-solid-svg-icons'
import twitterSquare from "../assets/twitter-square.svg";
import facebookSquare from "../assets/facebook-square.svg";
import instagramSquare from "../assets/instagram-square.svg";

import demoClubLogo from '../assets/democracy-club-logo.png'
import mvmtFrwdLogo from '../assets/movement-forward-logo-cropped-all-black-transparent-small.png'
import insetShadow from '../assets/inset-shadow.png'

export default function Footer() {
  return (
    <footer style={{ background: `var(--bs-gray-100) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}>
      <div className="container-fluid pt-5 buttons">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 offset-md-2 offset-xxl-2 align-items-md-center">
            <div className="btn-group-vertical w-100" role="group">
              <Link href="/reminders" className="btn btn-primary btn-lg" role="button">
                <FontAwesomeIcon icon={faBell} fixedWidth className="fas text-white" />
                Get reminders
              </Link>
              <Link href="/local" className="btn btn-primary btn-lg" role="button">
                <FontAwesomeIcon icon={faSearch} fixedWidth className="fas text-white" />
                Browse councils
              </Link>
              <Link href="/posters" className="btn btn-primary btn-lg" role="button">
                <FontAwesomeIcon icon={faFileDownload} fixedWidth className="fas text-white" />
                Download a poster
              </Link>
              <Link href="/" className="btn btn-primary btn-lg" role="button">
                <FontAwesomeIcon icon={faVoteYea} fixedWidth className="fas text-white" />
                Who to vote for
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4 py-md-5 links">
        <div className="row">
          <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 p-4">
            <div className="fw-bold d-flex align-items-center my-0">
              <span className="bs-icon-md d-flex justify-content-center align-items-center me-2">
                <a href="https://mvtfwd.com/links" target="_blank" rel="noreferrer">
                  <Image src={mvmtFrwdLogo} alt="Movement Forward logo" style={{ width: "3rem", height: "3rem" }} />
                  <span className="mx-2">@MVTFWD</span>
                </a>
              </span>

              <ul className="list-inline my-1">
                <li className="list-inline-item">
                  <a href="https://twitter.com/mvtfwd" target="_blank" rel="noreferrer">
                    <Image src={twitterSquare} alt="Follow us on Twitter" width={32} height={32} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://facebook.com/mvtfwd" target="_blank" rel="noreferrer">
                    <Image src={facebookSquare} alt="Follow us on Facebook" width={32} height={32} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com/mvtfwd" target="_blank" rel="noreferrer">
                    <Image src={instagramSquare} alt="Follow us on Instagram" width={32} height={32} />
                  </a>
                </li>
              </ul>
            </div>

            <p className="my-3">© 2023 Forward Democracy Limited</p>
            <p className="my-3">
              <Link href="/donate" className="btn btn-primary btn-sm me-2" role="button">Donate</Link>
              <Link href="/about" className="btn btn-link btn-sm me-2" role="button">About</Link>
              &nbsp;
            </p>

            <div className="my-5">
              <p className="mb-1">
                Elections data and postcode lookup powered by <a href="https://democracyclub.org.uk/" target="_blank" rel="noreferrer">Democracy Club</a>
              </p>
              <a href="https://democracyclub.org.uk/" target="_blank" rel="noreferrer">
                <Image src={demoClubLogo} alt="Movement Forward logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
