import React from 'react';

import { WardElectionData } from '../../types'

interface Props {
  data: WardElectionData
}

export default function WardElection({ data }: WardElectionData) {
  console.log("WardElection", data)
  return (
    <>
      <h1>{data.councilName} - {data.wardName}</h1>
    </>
  );
}
