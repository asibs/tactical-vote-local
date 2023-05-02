import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from './Layout'
import CopyButton from './CopyButton'
import DownloadPosterButton from './DownloadPosterButton'
import FacebookGroupsButton from './FacebookGroupsButton'
import ShareButton from './ShareButton'
import ElectionLookup from './ElectionLookup/ElectionLookup'
import WardsSummary from './WardsSummary'

import { WardElectionData } from '../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCopy,
  faClipboardCheck,
  faFileDownload,
  faLightbulb,
  faChartSimple,
  faUser,
  faIdCard,
  faTriangleExclamation,
  faHandHoldingHeart,
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
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
          <i>This looks like a new ward, or a ward whose name or boundary has changed - so
          we can&apos;t see which parties did best here at the last election</i>
        </>
      )
    case "TOP_3_MISMATCH_INDEPENDENT_WON":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
          <i>It looks like an independent candidate or smaller party won in this ward at the last election</i>
        </>
      )
    case "TOP_3_MISMATCH":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong>
        </>
      )
    case "CON_WIN_SECOND_NOT_PROGRESSIVE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
          <i>It looks like the Tories won in this ward last time, and an independent candidate or smaller party
          came second, so we&apos;re not sure which party is most likely to beat the Tories here</i>
        </>
      )
    case "INDEPENDENT_WON":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
          <i>It looks like an independent candidate or smaller party won in this ward at the last election</i>
        </>
      )
    case "PROGRESSIVES_TOO_CLOSE_NO_RECC":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
          <i>Multiple progressive parties performed similarly in this ward at the last election, and we
          can&apos;t tell which is most likely to beat the Tories this time</i>
        </>
      )
    case "PROGRESSIVES_TOO_CLOSE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Sorry, we don&apos;t have a recommendation for all your votes in this ward</strong><br />
          <i>The recommended party aren&apos;t standing enough candidates for all your votes in this ward,
          and we can&apos;t tell which party is next most likely to beat the Tories</i>
        </>
      )
    case "VOTE_FOR_PREFERRED_PROGRESSIVE":
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
          <strong>Vote for your preferred progressive party</strong><br />
          <i>Based on the last election, we think the Tories are unlikely to win
          in this ward, so tactical voting in this ward probably isn&apos;t necessary</i>
        </>
      )
    default:
      if (advice !== "" && advice !== "EMPTY") {
        if (firstRecommendedParty === "none") {
          return (
            <>
              <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
              <strong>Sorry, we don&apos;t have a recommendation in this ward</strong><br />
              <i>{advice}</i>
            </>
          )
        } else {
          return (
            <>
              <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
              {advice}
            </>
          )
        }
      } else {
        if (firstRecommendedParty === "none") {
          return (
            <>
              <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
              <strong>Sorry, we don&apos;t have a recommendation in this ward</strong>
            </>
          )
        } else {
          return (
            <>
              <FontAwesomeIcon icon={faLightbulb} className="fas" color="Orange" />
              We think <strong>{getHumanReadablePartyName(firstRecommendedParty)}</strong> have
              the best chance of beating the Tories in this ward - based on the previous election
              results and the number of candidates each party is standing in this ward this time.
            </>
          )
        }
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
      return "Not Clear"
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
        <div className="container-fluid py-3 py-md-4">

          {/* COUNCIL INFO */}
          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                <h6>Council</h6>
                <Link href={`/local/${data.councilSlug}/`}>
                  <h3>{data.councilName}</h3>
                </Link>
                {data.priority === 1 && (
                  <p>
                    {data.councilName} is under Tory control&nbsp;-&nbsp;
                    <strong>but if we vote tactically we will win it back on May 4th!</strong>
                  </p>
                )}
                {data.priority === 2 && (
                  <p>
                    {data.councilName} has a big Tory majority&nbsp;-&nbsp;
                    <strong>we need everyone to vote tactically to win back this council!</strong>
                  </p>
                )}
                {data.priority === 3 && (
                  <p>
                    {data.councilName} isn&apos;t under Tory control&nbsp;-&nbsp;
                    <strong>let&apos;s keep it that way!</strong>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* WARD INFO */}
          <div className="row py-2" style={{ background: `var(--bs-black) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}>
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                <h6>Ward</h6>
                <h3>{data.wardName}</h3>
              </div>
            </div>
          </div>

          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                {/* RECOMMENDATIONS */}
                {allNoRecommendation
                  ? (
                      <div className="pb-3">
                        <h6>Tactical Vote</h6>
                        <h3 className="party party-none">
                          {data.recommendationAdvice === "VOTE_FOR_PREFERRED_PROGRESSIVE"
                            ? "Tories unlikely to win here"
                            : "Hard To Call"
                          }
                        </h3>
                        <h4>Vote for your preferred progressive party</h4>
                      </div>
                    )
                  : wardVotes.map((party, index) => {
                    return (
                      <div key={index}>
                        <h6>Tactical Vote for Seat {index+1}</h6>
                        <h3 className={`party party-${party.toLowerCase()}`}>
                          {getHumanReadablePartyName(party)}
                        </h3>
                      </div>
                    )
                })}
                <p>
                  <small>
                    <a href="#share-actions">Spread the word to stop the tories!</a><br />
                    Know something we don&apos;t? <Link href="/about#info-we-need">Let us know</Link>.<br />
                    Don&apos;t live here? <a href="#search">Find your area</a>.
                  </small>
                </p>

                {/* RECOMMENDATIONS EXTRA INFO */}
                <div id="info-area" className="info-area">
                  <p>
                    {getAdvice(data.recommendationAdvice, wardVotes[0])}
                  </p>
                  {data.lastElectionResultsUrl && (
                    <p>
                      <FontAwesomeIcon icon={faChartSimple} className="fas" color="Green" />
                      <a href={data.lastElectionResultsUrl} target="_blank" rel="noreferrer">
                        View previous election results for this council & ward on Wikipedia
                      </a>
                    </p>
                  )}
                  <p>
                    <FontAwesomeIcon icon={faUser} className="fas" color="DeepSkyBlue" />
                    <a href={`https://whocanivotefor.co.uk/elections/local.${data.councilSlug}.${data.wardSlug}.2023-05-04/`} target="_blank" rel="noreferrer">
                      Find out about the candidates in this ward on WhoCanIVoteFor
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faIdCard} className="fas" color="MidnightBlue" />
                    <a href="https://www.electoralcommission.org.uk/i-am-a/voter/voter-id/accepted-forms-photo-id" target="_blank" rel="noreferrer">
                      Don&apos;t forget your Photo ID!
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faTriangleExclamation} className="fas" color="Red" />
                    It looks like there {data.seatsContested === 1 ? "is 1 seat" : `are ${data.seatsContested} seats`} up for
                    election in this ward so you should have {data.seatsContested} vote{data.seatsContested > 1 && "s"}. <strong>But
                    always double check your ballot paper to make sure!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ACTIONS */}
        <div id="share-actions" className="px-3 pt-3 offset-md-2" style={{ minWidth: "340px", maxWidth: "450px" }}>
          <p className="mb-1"><i><strong>Spread the word to help stop the Tories!</strong></i></p>
          <div className="btn-group-vertical mb-3 w-100" role="group">
            <ShareButton
              url={`https://stopthetories.vote/local/${data.councilSlug}`}
              shareTitle="Stop The Tories on May 4th"
              shareText="Vote tactically to take back your local council!"
            />
            <CopyButton
              textToCopy={`https://stopthetories.vote/local/${data.councilSlug}`}
              buttonText="Copy link to share this page"
              onClickButtonText="Link copied - now share it!"
            />
            <DownloadPosterButton />
          </div>

          <p className="mb-1"><i><strong>Help us cover the costs of running this site and make it even better!</strong></i></p>
          <div className="btn-group-vertical mb-3 w-100" role="group">
            <Link href="/donate" className="btn btn-primary btn-lg" role="button">
              <FontAwesomeIcon icon={faHandHoldingHeart} fixedWidth className="fas text-white" />
              Donate
            </Link>
          </div>

          <p className="mb-1"><i><strong>Keep up-to-date</strong></i></p>
          <div className="btn-group-vertical mb-3 w-100" role="group">
            <Link href="/reminders" className="btn btn-primary btn-lg" role="button">
              <FontAwesomeIcon icon={faBell} fixedWidth className="fas text-white" />
              Get reminders
            </Link>
            <FacebookGroupsButton groups={data.localGroups}/>
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
