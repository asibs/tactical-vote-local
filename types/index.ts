export interface BallotData {
  ballotPaperId: string
  ballotTitle: string
  electedRole: string
  date: string
  seatsContested: number
  wcivfUrl: string
}

export interface AddressData {
  address: string
  slug: string
}

interface CouncilElectionData {
  councilName: string
  councilSlug: string
  wards: {
    wardName: string
    wardSlug: string
    wardGeoJsonUri: string
  }[]
  geoJsonUri: string
}

interface WardElectionData {
  councilName: string
  councilSlug: string
  wardName: string
  wardSlug: string
  geoJsonUri: string
  totalSeats: number
  seatsContested: number
  targetCouncil: boolean
  recommendedParty: string
  recommendationAdvice: string
  localGroups: string[]
}
