import React from 'react'
import Link from 'next/link'

import { CouncilElectionData } from '../types'

interface Props {
  data: CouncilElectionData
}

export default function CouncilElection({ data }: Props) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {`${data.councilName} Council`}
          </li>
        </ol>
      </nav>

      <h1>{data.councilName}</h1>
      <h2>Wards with elections:</h2>
      <ul>
        {data.wards.map(wardData => {
          return (
            <li key={wardData.wardSlug}>
              <Link href={`/local/${data.councilSlug}/${wardData.wardSlug}`}>
                {wardData.wardName}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}
