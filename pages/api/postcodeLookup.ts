import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { Address, Ballot } from '../../types'

interface ResponseData {
  addressPicker: boolean
  addresses: Array<Address>
  featuredBallot?: Ballot
  otherBallots: Array<Ballot>
}

const mapDcDataToBallots = (dcData) => {
  console.log("mapDcDataToBallots called with", dcData)
  console.log("dcData.dates is", dcData.dates)
  console.log("dcData.dates[0] is", (dcData.dates || [])[0])
  console.log("dcData.dates[0]?.ballots is", (dcData.dates || [])[0]?.ballots)

  const mapping = (dcData.dates || []).map(dateObj => (
    (dateObj.ballots || [])[0]
  ))
  console.log("mapping is", mapping)

  return (
    (dcData.dates || []).map(dateObj => (
      (dateObj.ballots || []).map(ballotObj => (
        {
          ballotPaperId: ballotObj.ballot_paper_id,
          ballotTitle: ballotObj.ballot_title,
          electedRole: ballotObj.elected_role,
          date: dateObj.date,
          seatsContested: ballotObj.seats_contested,
          ecivfUrl: ballotObj.wcivf_url
        }
      ))
    )).flat()
  )
}

const getFeaturedBallot = (ballots) => {
  return ballots.filter(ballot => (
    ballot.date === '2023-05-04' && ballot.electedRole === 'Local Councillor'
  ))[0]
}

const getOtherBallots = (ballots) => {
  return ballots.filter(ballot => (
    ballot.date !== '2023-05-04' || ballot.electedRole !== 'Local Councillor'
  ))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const addressSlug = req.query.addressSlug
  const postcode = req.query.postcode?.toUpperCase()?.replace(/\s+/g, '')

  if (!addressSlug && !postcode) {
    res.status(400).json({ error: 'postcode or addressSlug must be provided' })
  }

  if (!!postcode && !/^[A-Z][A-Z0-9]{3,5}[A-Z]$/.test(postcode)) {
    res.status(400).json({ error: 'postcode not a valid format' })
  }

  const BASE_URI = 'https://developers.democracyclub.org.uk/api/v1'
  const uri = (!!addressSlug)
              ? `${BASE_URI}/address/${addressSlug}/`
              : `${BASE_URI}/postcode/${postcode}/`

  try {
    const { data } = await axios.get(`${uri}?auth_token=${process.env.DEMO_CLUB_API_KEY}`)
    const allBallots = mapDcDataToBallots(data)
    console.log("allBallots is", allBallots)
    console.log("featuredBallot is", getFeaturedBallot(allBallots))
    console.log("otherBallots is", getOtherBallots(allBallots))

    res.status(200).json({
      addressPicker: data.address_picker,
      addresses: data.addresses.map(a => ({ address: a.address, slug: a.slug })),
      featuredBallot: getFeaturedBallot(allBallots),
      otherBallots: getOtherBallots(allBallots)
    })
  } catch(error) {
    console.log(error);
    if (error.response) {
      res.status(error.response.status).end()
    } else {
      res.status(500).end()
    }
  }
}
