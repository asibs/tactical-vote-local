import EveryElectionApi from '../../lib/democracyClub/EveryElectionApi'

const ELECTION_DATE = "2023-05-04"
const ELECTION_ID_REGEX = "local\.[^\.]*\.2023"

interface Props {
  csvData: string
}

function CouncilElectionCsv({ csvData }: Props) {
  return (
    <pre>
      {csvData}
    </pre>
  )
}

// Statically generate props at build time on server-side.
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    // We don't need to generate this page on Prod
    // TODO: Shift this out of a page, or otherwise exclude from the prod build somehow...
    return "Oops"
  }

  const api = new EveryElectionApi()
  const councilElections = await api.getElections(ELECTION_DATE, ELECTION_ID_REGEX)
  // console.log("Got councilElections", councilElections)

  const wardElectionIds = councilElections.map(councilElection => councilElection.children).flat()
  console.log("Ward Election IDs", wardElectionIds)

  const wardElectionsData = []
  // Call each ward election endpoint sequentially
  // (try to avoid hitting DemocracyClub with 1000s of requests at the same time...!)
  for (const wardElectionId of wardElectionIds) {
    console.log("Starting call", wardElectionId)
    const wardElectionData = await api.getElection(wardElectionId)
    console.log("Finished call", wardElectionId)
    wardElectionsData.push(wardElectionData)
  }
  // console.log("Ward Elections Data", wardElectionsData)

  const csvData = wardElectionsData.map(election => {
    // console.log("election", election)

    const councilSlug = election.organisation.slug
    const wardSlug = election.division.slug
    const councilName = election.organisation.common_name
    const wardName = election.division.name
    const wardGss = election.division.official_identifier
    const totalSeats = election.division.seats_total
    const seatsContested = election.seats_contested

    return `${councilSlug}, ${wardSlug}, "${councilName}", "${wardName}", "${wardGss}", ${totalSeats}, ${seatsContested}`
  }).join("\r\n")

  console.log("CSV DATA", csvData)

  return {
    props: {
      csvData,
    },
  }
}

export default CouncilElectionCsv
