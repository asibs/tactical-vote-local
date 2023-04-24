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

const getAdvice = (advice: string, firstRecommendedParty: string) => {
  switch(advice) {
    case "NO_ELECTION_FOUND":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong><br />
          <i>This looks like a new ward, or a ward whose name or boundary has changed - so
          we can&apos;t see which parties did best here at the last election</i>
        </>
      )
    case "TOP_3_MISMATCH_INDEPENDENT_WON":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong><br />
          <i>It looks like an independent candidate or smaller party won here at the last election</i>
        </>
      )
    case "TOP_3_MISMATCH":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong>
        </>
      )
    case "CON_WIN_SECOND_NOT_PROGRESSIVE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong><br />
          <i>It looks like the Tories won here last time, and an independent candidate or smaller party
          came second, so we&apos;re not sure which party is most likely to beat the Tories here</i>
        </>
      )
    case "INDEPENDENT_WON":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong><br />
          <i>It looks like an independent candidate or smaller party won here at the last election</i>
        </>
      )
    case "PROGRESSIVES_TOO_CLOSE_NO_RECC":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation here</strong><br />
          <i>Multiple progressive parties performed similarly here at the last election, and we
          can&apos;t tell which is most likely to beat the Tories this time</i>
        </>
      )
    case "PROGRESSIVES_TOO_CLOSE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Sorry, we can&apos;t make a recommendation for all your votes here</strong><br />
          <i>The recommended party aren&apos;t standing enough candidates for all your votes,
          and we can&apos;t tell which party is next most likely to beat the Tories</i>
        </>
      )
    case "VOTE_FOR_PREFERRED_PROGRESSIVE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" />
          <strong>Vote for your preferred progressive party</strong><br />
          <i>Based on the last election, we think the Tories are unlikely to win
          here, so tactical voting in this ward probably isn&apos;t necessary</i>
        </>
      )
    default:
      if (advice !== "" && advice !== "EMPTY") {
        return (
          <>
            <FontAwesomeIcon icon={faLightbulb} className="fas" />
            {advice}
          </>
        )
      } else if (firstRecommendedParty === "none") {
        return (
          <>
            <FontAwesomeIcon icon={faLightbulb} className="fas" />
            <strong>Sorry, we can&apos;t make a recommendation here</strong>
          </>
        )
      } else {
        return (
          <>
            <FontAwesomeIcon icon={faLightbulb} className="fas" />
            Based on the previous election results and the candidates standing this time, we
            think <strong>{getHumanReadablePartyName(firstRecommendedParty)}</strong> have
            the best chance of beating the Tories.
          </>
        )
      }
  }
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
      return "Unsure"
  }
}

interface Props {
  data: WardElectionData
}

export default function WardElection({ data }: Props) {
  const wardVotes = getWardVotes(data.seatsContested, data.recommendedVote1, data.recommendedVote2, data.recommendedVote3)
  const allNoRecommendation = wardVotes.every(rec => rec === "none")

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
                {data.priority === 1 && (
                  <p>
                    {data.councilName} is currently under Tory control&nbsp;-&nbsp;
                    <strong>we have a great chance of taking it back!</strong>
                  </p>
                )}
                {data.priority === 2 && (
                  <p>
                    {data.councilName} is currently under Tory control&nbsp;-&nbsp;
                    <strong>let&apos;s take it back!</strong>
                  </p>
                )}
                {data.priority === 3 && (
                  <p>
                    {data.councilName} isn't under Tory control&nbsp;-&nbsp;
                    <strong>let&apos;s keep it that way!</strong>
                  </p>
                )}
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
                {allNoRecommendation
                  ? (
                      <div>
                        <h6>Tactical Vote</h6>
                        <h3 className="party party-none">Unsure</h3>
                      </div>
                    )
                  : wardVotes.map((party, index) => {
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
                    {getAdvice(data.recommendationAdvice, wardVotes[0])}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faTriangleExclamation} className="fas" color="red" />
                    It looks like there {data.seatsContested === 1 ? "is 1 seat" : `are ${data.seatsContested} seats`} up
                    for election in this ward so you should have {data.seatsContested} vote{data.seatsContested > 1 && "s"}.
                    <br />
                    <strong>But always double check your ballot paper to make sure!</strong>
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
          <h3 className="text-uppercase position-sticky py-3">
            All <strong><Link href={`/local/${data.councilSlug}`}>{data.councilName}</Link></strong> Wards
          </h3>
        </WardsSummary>

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
