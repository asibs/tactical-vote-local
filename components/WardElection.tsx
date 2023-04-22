import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from './Layout'
import CopyButton from './CopyButton'
import DownloadPosterButton from './DownloadPosterButton'
import FacebookGroupsButton from './FacebookGroupsButton'
import ElectionLookup from './ElectionLookup/ElectionLookup'
import WardsSummary from './WardsSummary'

import { WardElectionData } from '../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCopy,
  faClipboardCheck,
  faFileDownload,
  faLightbulb,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import facebookSquare from '../assets/facebook-square.svg'
import facebookSquareBlue from '../assets/facebook-square-blue.svg'
import facebookSquareWhite from '../assets/facebook-square-white.svg'

import insetShadow from '../assets/inset-shadow.png'

const getWardVotes = (seatsContested: number, vote1: string, vote2: string, vote3: string) => {
  return [vote1, vote2, vote3].slice(0,seatsContested).map(v => (!!v ? v.toLowerCase() : 'none'))
}

const getHumanReadablePartyName = (party: string) => {
  switch(party.toLowerCase()) {
    case "lab":
      return "Labour"
      break;
    case "lib":
      return "Liberal Democrats"
      break;
    case "grn":
      return "Green"
      break;
    default:
      return "No Recommendation"
  }
}

interface Props {
  data: WardElectionData
}

export default function WardElection({ data }: Props) {
  return (
    <Layout>

      {/* WARD HEADER + VOTE ADVICE (all in header element) */}
      <header>

        {/* HEADER */}
        <div className="container-fluid py-3 py-md-4">
          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                <h6>Council</h6>
                <Link href={`/local/${data.councilSlug}/`}>
                  <h3>{data.councilName}</h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="row py-2" style={{ background: `var(--bs-black) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}>
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                <h6>Ward</h6>
                <h3>{data.wardName}</h3>
              </div>
            </div>
          </div>

          {/* VOTE ADVICE (still in header element)*/}
          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                {getWardVotes(data.seatsContested, data.recommendedVote1, data.recommendedVote2, data.recommendedVote3).map((party, index) => {
                  return (
                    <div key={index}>
                      <h6>Tactical Vote Seat {index+1}</h6>
                      <h3 className={`party party-${party.toLowerCase()}`}>
                        {getHumanReadablePartyName(party)}
                      </h3>
                    </div>
                  )
                })}

                <div className="info-area">
                  <p>
                    <FontAwesomeIcon icon={faLightbulb} className="fas" />
                    {data.recommendationAdvice
                      ? data.recommendationAdvice
                      : `${getHumanReadablePartyName(data.recommendedVote1)} previously received the most progressive votes here.`
                    }
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faTriangleExclamation} className="fas" color="red" />
                    Follow staff guidance, don&apos;t make more votes than you&apos;re allowed in your ward!
                  </p>
                </div>
                <p>
                  <small>
                    Know something we don&apos;t? <Link href="/about">Let us know</Link>.
                  </small>
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      <main>
        {/* ACTIONS */}
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 offset-md-2 offset-xxl-2 align-items-md-center">
              <div className="btn-group-vertical w-100" role="group">
                <CopyButton
                  textToCopy={`https://stopthetories.vote/local/${data.councilSlug}/${data.wardSlug}`}
                  buttonText="Copy link to this page"
                  onClickButtonText="Link copied!"
                />

                <DownloadPosterButton />

                <FacebookGroupsButton groups={data.localGroups}/>
              </div>
            </div>
          </div>
        </div>

        {/* ALL WARDS FOR THIS COUNCIL */}
        <WardsSummary councilSlug={data.councilSlug} wards={data.allCouncilWards}>
          <h3 className="text-uppercase py-3">
            All <strong><Link href={`/local/${data.councilSlug}`}>{data.councilName}</Link></strong> Wards
          </h3>
        </WardsSummary>

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
