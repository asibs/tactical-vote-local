import Head from 'next/head'
import axios from 'axios'

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
  let paths = []

  // Initialise nextPageUri with no offset so it starts at the first page of data
  let nextPageUri = `${EVERY_ELECTION_URI}?poll_open_date=${ELECTION_DATE}&election_id_regex=${ELECTION_ID_REGEX}`

  while (nextPageUri) {
    // Don't catch errors when getting data from remote APIs here.
    // getStaticPaths is called at build time, and we want the build to fail if the API fails!
    const { data } = await axios.get(nextPageUri)

    const newPaths = data.results.forEach(election => {
      const councilSlug = election.organisation.slug

      // Push the /council/[councilSlug] page (top-level page for a whole council election)
      paths.push({ params: { slugs: [councilSlug] } })

      // Push the /council/[councilSlug]/[wardSlug] pages
      const regexp = new RegExp(`[^\.]+\.${councilSlug}\.([^\.]+)\.${ELECTION_DATE}`)
      election.children.forEach(childSlug => {
        const matches = regexp.exec(childSlug)
        const wardSlug = matches[1]
        paths.push({ params: { slugs: [councilSlug, wardSlug] } })
      })
    })

    nextPageUri = data.next
  }

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
  const wardUri = getWardUri(councilSlug, wardSlug)
  const { data } = await axios.get(wardUri)

  const wardElectionData = {
    councilName: data.organisation.common_name,
    councilSlug: data.organisation.slug,
    wardName: data.division.name,
    wardSlug: data.division.slug,
    geoJsonUri: `${wardUri}/geo.json`,
  }

  return { props: { wardElection: wardElectionData } }
}

async function getCouncilData(councilSlug: string) {
  const councilUri = getCouncilUri(councilSlug)
  const { data } = await axios.get(councilUri)

  const wardsApiData = await Promise.all(
    data.children.map((wardElectionId) => {
      return axios.get(getElectionUri(wardElectionId))
    })
  )

  const wardsData = wardsApiData.map(({ data }) => {
    return {
      wardName: data.division.name,
      wardSlug: data.division.slug,
      wardGeoJsonUri: `${getElectionUri(data.electionId)}/geo.json`
    }
  })

  const councilElectionData = {
    councilName: data.organisation.common_name,
    councilSlug: data.organisation.slug,
    wards: wardsData,
    geoJsonUri: `${councilUri}/geo.json`,
  }

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
