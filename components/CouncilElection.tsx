import React from 'react';
import Link from 'next/link'

import { CouncilElectionData } from '../types'

interface Props {
  data: CouncilElectionData
}

export default function CouncilElection({ data }: Props) {

  return (
    <>
      <h1>{data.councilName}</h1>
      <h2>Wards with elections:</h2>
      <ul>
        {data.wards.map(wardData => {
          return (
            <li key={wardData.wardSlug}>
              <Link href={`/council/${data.councilSlug}/${wardData.wardSlug}`}>
                {wardData.wardName}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}
