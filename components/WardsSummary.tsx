import React from 'react'
import Link from 'next/link'

import { WardSummaryData } from '../types'

interface Props {
  councilSlug: string
  wards: WardSummaryData[]
  children: React.ReactNode
}

const getWardVotes = (seatsContested: number, vote1: string, vote2: string, vote3: string) => {
  const recommendations = [vote1, vote2, vote3].slice(0,seatsContested).map(v => (!!v ? v.toLowerCase() : 'none'))

  return recommendations.map((partyName, index) => {
    return (
      <span className={`party party-${partyName}`} key={index}>
        {index+1}
      </span>
    )
  })
}

export default function WardsSummary({ councilSlug, wards, children }: Props) {
  return (
    <div className="container-fluid py-3 py-md-5">
      <div className="row">
        <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
          {children}

          <p>
            <a href="#search">Find your ward</a>
          </p>

          <div className="two-columns three-columns">
            <ul className="list-of-wards">
              {wards.map(wardData => {
                return (
                  <li key={wardData.wardSlug}>
                    <Link href={`/local/${councilSlug}/${wardData.wardSlug}`}>
                      <strong>{wardData.wardName}</strong>
                      {getWardVotes(
                        wardData.seatsContested,
                        wardData.recommendedVote1,
                        wardData.recommendedVote2,
                        wardData.recommendedVote3,
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
