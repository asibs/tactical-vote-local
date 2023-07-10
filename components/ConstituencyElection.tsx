import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from './Layout'
import CopyButton from './CopyButton'
import DownloadPosterButton from './DownloadPosterButton'
import FacebookGroupsButton from './FacebookGroupsButton'
import ShareButton from './ShareButton'

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

interface Props {
  constituencySlug: string
  constituencyName: string
  recommendedPartyCode: string
  recommendedPartyName: string
  recommendedCandidateName: string
  currentlyTory: boolean
}

export default function WardElection({ constituencySlug, constituencyName, recommendedPartyCode, recommendedPartyName, recommendedCandidateName, currentlyTory }: Props) {
  return (
    <Layout>

      {/* WARD HEADER + VOTE ADVICE (all in header element) */}
      <header>
        <div className="container-fluid py-3 py-md-4">

          {/* CONSTITUENCY INFO */}
          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                <h6>Constituency</h6>
                <h3>{constituencyName}</h3>
                {currentlyTory && (
                  <p>
                    {constituencyName} has a Tory MP&nbsp;-&nbsp;
                    <strong>but if we vote tactically we will win it back on July 20th!</strong>
                  </p>
                )}
                {!currentlyTory && (
                  <p>
                    {constituencyName} does&apos;t have a Tory MP&nbsp;-&nbsp;
                    <strong>let&apos;s keep it that way!</strong>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="row py-2">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                {/* RECOMMENDATION */}
                <div className="pb-3">
                  <h6>Tactical Vote</h6>
                  <h3 className={`party party-${recommendedPartyCode}`}>
                  {recommendedCandidateName} - {recommendedPartyName}
                  </h3>
                </div>

                <p>
                  <small>
                    <a href="#share-actions">Spread the word to stop the tories!</a><br />
                    Don&apos;t live here? <a href="/">Find out if there's an election in your area</a>.
                  </small>
                </p>

                {/* RECOMMENDATIONS EXTRA INFO */}
                <div id="info-area" className="info-area">
                  <p>
                    <FontAwesomeIcon icon={faUser} className="fas" color="DeepSkyBlue" />
                    <a href="https://whocanivotefor.co.uk/" target="_blank" rel="noreferrer">
                      Find out about the candidates in this ward on WhoCanIVoteFor
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faIdCard} className="fas" color="MidnightBlue" />
                    <a href="https://www.electoralcommission.org.uk/i-am-a/voter/voter-id/accepted-forms-photo-id" target="_blank" rel="noreferrer">
                      Don&apos;t forget your Photo ID!
                    </a>
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
              url={`https://stopthetories.vote/national/${constituencySlug}`}
              shareTitle="Stop The Tories on July 20th"
              shareText="Vote tactically to take back your constituency!"
            />
            <CopyButton
              textToCopy={`https://stopthetories.vote/national/${constituencySlug}`}
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
          </div>
        </div>

      </main>
    </Layout>
  );
}
