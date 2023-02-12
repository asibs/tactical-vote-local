import React from 'react';

import { WardElectionData } from '../types'

interface Props {
  data: WardElectionData
}

export default function WardElection({ data }: Props) {
  console.log("WardElection", data)
  return (
    <>
      <h1>{data.councilName} - {data.wardName}</h1>

      <p>There are {data.seatsContested} out of {data.totalSeats} seats being contested here.</p>

      {data.recommendedParty && (
        <p>We recommend you vote for the {data.recommendedParty} party</p>
      )}

      {data.recommendationAdvice && (
        <p>{data.recommendationAdvice}</p>
      )}

      {data.targetCouncil && (
        <p>
          This is a target council - it could easily flip away from the Tories!
          Make sure you&apos;re registered to vote, and share this page with your
          friends who live locally for the best change of turfing out the Tories!
        </p>
      )}

      {data.localGroups.length > 0 && (
        <>
          <p>Join a local group:</p>
          <ul>
            {data.localGroups.map(groupUrl => (
              <li key={groupUrl}>{groupUrl}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
