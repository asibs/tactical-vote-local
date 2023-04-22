import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from './Footer'
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

import logo from '../assets/stop-the-tories-logo-transparent.png'
import demoClubLogo from '../assets/democracy-club-logo.png'
import mvmtFrwdLogo from '../assets/movement-forward-logo-cropped-all-black-transparent-small.png'

import { Permanent_Marker } from '@next/font/google'

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Stop The Tories .Vote</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" /> {/* TODO: Replace if/when we get a proper favicon! */}
      </Head>

      <div style={{ background: "var(--bs-gray-100)" }}>
        <Navbar />

        {/* MAIN PAGE */}
        {children}

        <Footer />
      </div>
    </>
  )
}