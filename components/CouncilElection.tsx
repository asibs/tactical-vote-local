import React from 'react'
import Link from 'next/link'

import Layout from './Layout'
import Header from './Header'
import CopyButton from './CopyButton'
import DownloadPosterButton from './DownloadPosterButton'
import FacebookGroupsButton from './FacebookGroupsButton'
import ShareButton from './ShareButton'
import ElectionLookup from './ElectionLookup/ElectionLookup'
import WardsSummary from './WardsSummary'

import { CouncilElectionData } from '../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

interface Props {
  data: CouncilElectionData
}

export default function CouncilElection({ data }: Props) {
  return (
    <Layout>
      <header>
        <div className="container-fluid py-4 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
              <div>
                {[1,2].includes(data.priority) && (
                  <h3 className="text-uppercase fw-bold">Take back</h3>
                )}
                <h2 className="text-uppercase fw-bold">{`${data.councilName} Council`}</h2>
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
                {data.priority === 4 && (
                  <p>
                    {data.councilName} doesn&apos;t have a full election, but does have a
                    byelection in {data.wards.length} ward{data.wards.length > 1 && 's'}
                  </p>
                )}

                <p>
                  <small>
                    Don&apos;t live here? <a href="#search">Find your area</a>.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* WARDS FOR THIS COUNCIL */}
        <WardsSummary councilSlug={data.councilSlug} wards={data.wards}>
          <h3 className="text-uppercase position-sticky py-3">
            All <strong><span style={{ textDecoration: "underline" }}>{data.councilName}</span></strong> Wards
          </h3>
        </WardsSummary>

        {/* ACTIONS */}
        <div className="px-3 py-3 offset-md-2" style={{ minWidth: "340px", maxWidth: "450px" }}>
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

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
