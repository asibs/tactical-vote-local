import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import Layout from './Layout'
import Header from './Header'
import ElectionLookup from './ElectionLookup/ElectionLookup'
import WardsSummary from './WardsSummary'
import { CouncilElectionData } from '../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCopy,
  faClipboardCheck,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons'

// const getPartyCssClass = (seatsContested: number, vote1: string, vote2: string, vote3: string) => {
//   const recommendations = [vote1, vote2, vote3].slice(0,seatsContested).map(v => (!!v ? v : 'none'))
//
//   const cssParties = recommendations.map(v => (!v ? 'none' : v).toLowerCase())
//   return `party-${cssParties.join('-')}`
// }

const getWardVotes = (seatsContested: number, vote1: string, vote2: string, vote3: string) => {
  const recommendations = [vote1, vote2, vote3].slice(0,seatsContested).map(v => (!!v ? v.toLowerCase() : 'none'))

  return recommendations.map((partyName, index) => {
    return (
      <span className={`party party-${partyName}`} key={index}>
        {index+1}
      </span>
    )
  })
}

interface Props {
  data: CouncilElectionData
}

export default function CouncilElection({ data }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(`https://stopthetories.vote/local/${data.councilSlug}`)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2500);
  }

  return (
    <Layout>
      <Header>
        <h3 className="text-uppercase fw-bold">Take back</h3>
        <h2 className="text-uppercase fw-bold">{`${data.councilName} Council`}</h2>
      </Header>

      <main>
        {/* ACTIONS */}
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 offset-md-2 offset-xxl-2 align-items-md-center">
              <div className="btn-group-vertical w-100" role="group">
                <button onClick={copyUrlToClipboard} className="btn btn-primary btn-lg" role="button" disabled={isCopied}>
                  {isCopied
                    ? (
                      <>
                        <FontAwesomeIcon icon={faClipboardCheck} fixedWidth className="fas text-white" />
                        Link copied!
                      </>
                    )
                    : (
                      <>
                        <FontAwesomeIcon icon={faCopy} fixedWidth className="fas text-white" />
                        Copy link to this page
                      </>
                    )
                  }
                </button>
                <Link href="/posters" className="btn btn-primary btn-lg" role="button">
                  <FontAwesomeIcon icon={faFileDownload} fixedWidth className="fas text-white" />
                  Download a poster
                </Link>

                {/* Uncomment if we decide to add the drop-down for ALL constituencies / social links in a council...
                <div className="dropdown btn-group" role="group">
                  <button className="btn btn-primary btn-lg dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                    <i className="fa fa-facebook-square"></i>Join local Facebook groups&nbsp;
                  </button>
                  <div className="dropdown-menu text-primary w-100">
                    <a className="dropdown-item" href="https://facebook.com">
                      <i className="fa fa-facebook-square"></i>Kilburn, Denby, Holbrook &amp; Horsley
                    </a>
                    <a className="dropdown-item" href="https://facebook.com">
                      <i className="fa fa-facebook-square"></i>Smalley, Shipley &amp; Horsley Woodhouse
                    </a>
                    <a className="dropdown-item" href="https://facebook.com">
                      <i className="fa fa-facebook-square"></i>Cumbernauld, Kilsyth and Kirkintilloch East
                    </a>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* WARDS FOR THIS COUNCIL */}
        <WardsSummary councilSlug={data.councilSlug} wards={data.wards}>
          <h3 className="text-uppercase py-3">
            How to vote in <strong><span style={{ textDecoration: "underline" }}>{data.councilName}</span></strong> Wards
          </h3>
        </WardsSummary>

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
