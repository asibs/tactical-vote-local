import Head from 'next/head'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'

import CouncilElection from '../../components/CouncilElection'
import WardElection from '../../components/WardElection'
import { CouncilElectionData, WardElectionData } from '../../types'

const EVERY_ELECTION_URI = "https://elections.democracyclub.org.uk/api/elections"
const ELECTION_DATE = "2023-05-04"
const ELECTION_ID_REGEX = "local\.[^\.]*\.2023"

interface Props {
  councilElection?: CouncilElectionData
  wardElection?: WardElectionData
}

export default function ElectionPage({ councilElection, wardElection }: Props) {
  if (councilElection) {
    console.log("COUNCIL ELECTION", councilElection)
    return <CouncilElection data={councilElection} />
  } else if (wardElection) {
    console.log("WARD ELECTION", wardElection)
    return <WardElection data={wardElection} />
  } else {
    return (
      <p>Oops, no council or ward, something went wrong...</p>
    )
  }
}

/* Generate the dynamic paths at /council/...
// ie. the valid values of councilSlug & wardSlug in /council/[councilSlug]/[wardSlug]
// Only called once at build-time (or per-request in dev mode)
*/
export async function getStaticPaths() {
  console.log("called getStaticPaths")

  const paths = []

  const parser = fs
    .createReadStream(path.join(process.cwd(), 'data/local-tactical-2023-05-04.csv'))
    .pipe(parse({ columns: true }));

  for await (const record of parser) {
    // TODO: adds duplicate council entries to `paths` which is non-ideal, but doesn't seem to cause Next.js any problems...
    paths.push({ params: { slugs: [record.council_slug] } })
    paths.push({ params: { slugs: [record.council_slug, record.ward_slug] } })
  }


  // let paths = []
  //
  // // Initialise nextPageUri with no offset so it starts at the first page of data
  // let nextPageUri = `${EVERY_ELECTION_URI}?poll_open_date=${ELECTION_DATE}&election_id_regex=${ELECTION_ID_REGEX}`
  //
  // while (nextPageUri) {
  //   // Don't catch errors when getting data from remote APIs here.
  //   // getStaticPaths is called at build time, and we want the build to fail if the API fails!
  //   const { data } = await axios.get(nextPageUri)
  //
  //   const newPaths = data.results.forEach(election => {
  //     const councilSlug = election.organisation.slug
  //
  //     // Push the /council/[councilSlug] page (top-level page for a whole council election)
  //     paths.push({ params: { slugs: [councilSlug] } })
  //
  //     // Push the /council/[councilSlug]/[wardSlug] pages
  //     const regexp = new RegExp(`[^\.]+\.${councilSlug}\.([^\.]+)\.${ELECTION_DATE}`)
  //     election.children.forEach(childSlug => {
  //       const matches = regexp.exec(childSlug)
  //       const wardSlug = matches[1]
  //       paths.push({ params: { slugs: [councilSlug, wardSlug] } })
  //     })
  //   })
  //
  //   nextPageUri = data.next
  // }


  // We'll only pre-render these paths at build time.
  // { fallback: false } means any other routes should 404.
  return { paths, fallback: false }
}

/* Generate the data for statically rendering /council/[councilSlug]/[wardSlug]
// Called once at build-time for each page / value of councilSlug / wardSlug (or per-request in dev mode)
*/
export async function getStaticProps({ params }) {
  const councilSlug = params.slugs[0]
  const wardSlug = params.slugs[1]

  if (wardSlug) {
    // Ward-specific page
    return getWardData(councilSlug, wardSlug)
  } else {
    // Top-level council page
    return getCouncilData(councilSlug)
  }
}

async function getWardData(councilSlug: string, wardSlug: string) {
  const parser = fs
    .createReadStream(path.join(process.cwd(), 'data/local-tactical-2023-05-04.csv'))
    .pipe(parse({
      columns: true,
      on_record: (record) => {
        if (record.council_slug === councilSlug && record.ward_slug === wardSlug) {
          return record
        }
        return null
      },
    }));

  let wardRecord = undefined
  for await (const record of parser) {
    if (!wardRecord) {
      wardRecord = record
    } else {
      console.log(`ERROR: Found duplicate line ${record} for ${councilSlug}.${wardSlug}`)
    }
  }

  const wardElectionData = {
    councilName: wardRecord.council_name,
    councilSlug: wardRecord.council_slug,
    wardName: wardRecord.ward_name,
    wardSlug: wardRecord.ward_slug,
    geoJsonUri: wardRecord.council_name,
    totalSeats: wardRecord.no_ward_seats,
    seatsContested: wardRecord.no_seats_contested,
    targetCouncil: wardRecord.target_council,
    recommendedParty: wardRecord.recommended_party,
    recommendationAdvice: wardRecord.recommendation_advice,
    localGroups: [
      wardRecord.local_group_1, wardRecord.local_group_2, wardRecord.local_group_3
    ].filter((group) => !!group),
  }


  // const wardUri = getWardUri(councilSlug, wardSlug)
  // const { data } = await axios.get(wardUri)
  //
  // const wardElectionData = {
  //   councilName: data.organisation.common_name,
  //   councilSlug: data.organisation.slug,
  //   wardName: data.division.name,
  //   wardSlug: data.division.slug,
  //   geoJsonUri: `${wardUri}/geo.json`,
  // }


  return { props: { wardElection: wardElectionData } }
}

async function getCouncilData(councilSlug: string) {
  const parser = fs
    .createReadStream(path.join(process.cwd(), 'data/local-tactical-2023-05-04.csv'))
    .pipe(parse({
      columns: true,
      on_record: (record) => {
        if (record.council_slug === councilSlug) {
          return record
        }
        return null
      },
    }));

  let councilElectionData = undefined
  for await (const record of parser) {
    if (!councilElectionData) {
      councilElectionData = {
        councilName: record.council_name,
        councilSlug: record.council_slug,
        wards: [],
        geoJsonUri: record.council_name,
      }
    }

    councilElectionData.wards.push({
      wardName: record.ward_name,
      wardSlug: record.ward_slug,
      wardGeoJsonUri: record.ward_name
    })
  }


  //
  // const councilUri = getCouncilUri(councilSlug)
  // const { data } = await axios.get(councilUri)
  //
  // const wardsApiData = await Promise.all(
  //   data.children.map((wardElectionId) => {
  //     return axios.get(getElectionUri(wardElectionId))
  //   })
  // )
  //
  // const wardsData = wardsApiData.map(({ data }) => {
  //   return {
  //     wardName: data.division.name,
  //     wardSlug: data.division.slug,
  //     wardGeoJsonUri: `${getElectionUri(data.electionId)}/geo.json`
  //   }
  // })
  //
  // const councilElectionData = {
  //   councilName: data.organisation.common_name,
  //   councilSlug: data.organisation.slug,
  //   wards: wardsData,
  //   geoJsonUri: `${councilUri}/geo.json`,
  // }


  return { props: { councilElection: councilElectionData } }
}

function getWardUri(councilSlug: string, wardSlug: string) {
  return `${EVERY_ELECTION_URI}/local.${councilSlug}.${wardSlug}.${ELECTION_DATE}`
}

function getCouncilUri(councilSlug: string) {
  return `${EVERY_ELECTION_URI}/local.${councilSlug}.${ELECTION_DATE}`
}

function getElectionUri(electionId: string) {
  return `${EVERY_ELECTION_URI}/${electionId}`
}
