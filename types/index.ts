export interface Ballot {
  ballotPaperId: string
  ballotTitle: string
  electedRole: string
  date: string
  seatsContested: number
  wcivfUrl: string
}

export interface Address {
  address: string
  slug: string
}
