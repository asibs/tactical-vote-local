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
import { faBell } from '@fortawesome/free-solid-svg-icons'

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
                    {data.councilName} is currently under Tory control&nbsp;-&nbsp;
                    <strong>but we have a great chance of taking it back on May 4th!</strong>
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
        <div className="container-fluid pb-4 pb-md-5">
          <div className="row py-2">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 offset-md-2 offset-xxl-2 align-items-md-center">
              <p className="mb-1"><i>Spread the word to help stop the Tories!</i></p>
              <div className="btn-group-vertical w-100" role="group">
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
            </div>
          </div>
          <div className="row py-2">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 offset-md-2 offset-xxl-2 align-items-md-center">
              <p className="mb-1"><i>Keep up-to-date</i></p>
              <div className="btn-group-vertical w-100" role="group">
                <Link href="/reminders" className="btn btn-primary btn-lg" role="button">
                  <FontAwesomeIcon icon={faBell} fixedWidth className="fas text-white" />
                  Get reminders
                </Link>
                <FacebookGroupsButton groups={data.localGroups}/>
              </div>
            </div>
          </div>
        </div>

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
