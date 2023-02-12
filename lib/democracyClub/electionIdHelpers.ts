const ELECTION_TYPE_LOCAL = 'local'

export function getCouncilElectionId(councilSlug: string, electionDate: string) {
  return `${ELECTION_TYPE_LOCAL}.${councilSlug}.${electionDate}`
}

export function getCouncilWardElectionId(councilSlug: string, wardSlug: string, electionDate: string) {
  return `${ELECTION_TYPE_LOCAL}.${councilSlug}.${wardSlug}.${electionDate}`
}

// TODO: Add methods to extract council/wards/etc from an electionId?
