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

export interface CouncilElectionData {
  councilName: string
  councilSlug: string
  priority: number
  wards: {
    wardName: string
    wardSlug: string
    seatsContested: number
    recommendedVote1: string
    recommendedVote2: string
    recommendedVote3: string
  }[]
}

export interface WardElectionData {
  councilName: string
  councilSlug: string
  wardName: string
  wardSlug: string
  totalSeats: number
  seatsContested: number
  priority: number
  recommendedVote1: string
  recommendedVote2: string
  recommendedVote3: string
  recommendationAdvice: string
  localGroups: {
    name: string
    link: string
  }[]
}
