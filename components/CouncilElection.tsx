import React from 'react'
import Link from 'next/link'

import Layout from './Layout'
import Header from './Header'
import CopyButton from './CopyButton'
import DownloadPosterButton from './DownloadPosterButton'
import FacebookGroupsButton from './FacebookGroupsButton'
import ElectionLookup from './ElectionLookup/ElectionLookup'
import WardsSummary from './WardsSummary'

import { CouncilElectionData } from '../types'

interface Props {
  data: CouncilElectionData
}

export default function CouncilElection({ data }: Props) {
  return (
    <Layout>
      <Header>
        <h3 className="text-uppercase fw-bold">Take back</h3>
        <h2 className="text-uppercase fw-bold">{`${data.councilName} Council`}</h2>
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
      </Header>

      <main>
        {/* ACTIONS */}
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 col-xxl-4 offset-md-2 offset-xxl-2 align-items-md-center">
              <div className="btn-group-vertical w-100" role="group">
                <CopyButton
                  textToCopy={`https://stopthetories.vote/local/${data.councilSlug}`}
                  buttonText="Copy link to this page"
                  onClickButtonText="Link copied!"
                />

                <DownloadPosterButton />

                <FacebookGroupsButton groups={data.localGroups}/>
              </div>
            </div>
          </div>
        </div>

        {/* WARDS FOR THIS COUNCIL */}
        <WardsSummary councilSlug={data.councilSlug} wards={data.wards}>
          <h3 className="text-uppercase position-sticky py-3">
            How to vote in <strong><span style={{ textDecoration: "underline" }}>{data.councilName}</span></strong> Wards
          </h3>
        </WardsSummary>

        {/* ELECTION LOOKUP */}
        <ElectionLookup />
      </main>
    </Layout>
  );
}
