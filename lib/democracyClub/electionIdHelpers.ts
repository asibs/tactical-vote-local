const ELECTION_TYPE_LOCAL = 'local'

/*
// Democracy Club ElectionIds are of the format 'election_type.org.division.date'
//
// This file contains various helper functions for constructing / de-constructing
// them.
*/

export function getCouncilElectionId(councilSlug: string, electionDate: string) {
  return `${ELECTION_TYPE_LOCAL}.${councilSlug}.${electionDate}`
}

export function getCouncilWardElectionId(councilSlug: string, wardSlug: string, electionDate: string) {
  return `${ELECTION_TYPE_LOCAL}.${councilSlug}.${wardSlug}.${electionDate}`
}

export function getPathFromElectionId(electionId: string) {
  const pathParts = electionId.split('.')

  if (pathParts.length < 3) {
    // Must be at least election_type.org.date
    throw new Error(`Invalid ElectionId: ${electionId}`)
  }

  // We don't use the dates in our paths, so strip off the last element
  return `/${pathParts.slice(0, -1).join('/')}`
}
