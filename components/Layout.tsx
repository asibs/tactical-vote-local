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
  children: React.ReactNode,
  shareUrl?: string,
  shareTitle?: string,
  shareDescription?: string,
  shareImage?: string
}

export default function Layout({ children, shareUrl, shareTitle, shareDescription, shareImage }: Props) {
  return (
    <>
      <Head>
        <title>Stop The Tories .Vote</title>
        <meta name="description" content="tactical voting info and resources for your area" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

        {/* favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Facebook meta tags for sharing */}
        <meta property="og:url" content={shareUrl || "https://stopthetories.vote"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={shareTitle || "Stop The Tories .Vote"} />
        <meta property="og:description" content={shareDescription || "There are more of us, let's show up, set the agenda, and own the future"} />
        <meta property="og:image" content={shareImage || "https://stopthetories.vote/stop-the-tories-vote-share-007.jpg"} />

        {/* Twitter meta tags for sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stopthetories.vote" />
        <meta property="twitter:url" content={shareUrl || "https://stopthetories.vote"} />
        <meta name="twitter:title" content={shareTitle || "Stop The Tories .Vote"} />
        <meta name="twitter:description" content={shareDescription || "There are more of us, let's show up, set the agenda, and own the future"} />
        <meta name="twitter:image" content={shareImage || "https://stopthetories.vote/stop-the-tories-vote-share-007.jpg"} />
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
