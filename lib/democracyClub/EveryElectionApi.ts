import axios, { AxiosInstance } from 'axios'

import { getCouncilElectionId, getCouncilWardElectionId } from './electionIdHelpers'

const EVERY_ELECTION_URI = "https://elections.democracyclub.org.uk/api/elections"

class EveryElectionApi {
  axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({ baseURL: EVERY_ELECTION_URI })
  }

  async getElections(pollOpenDate: string, electionIdRegex: string) {
    // Listing elections is paginated, and we want to combine all pages together
    const results = []

    let response = await this.axiosInstance.get('/', {
      params: {
        poll_open_date: pollOpenDate,
        election_id_regex: electionIdRegex,
      }
    })

    results.push(...response.data.results)

    while (response.data.next) {
      response = await this.axiosInstance.get(response.data.next)
      results.push(...response.data.results)
    }

    return results
  }

  async getElection(electionId: string) {
    return this.axiosInstance.get(electionId).then(response => response.data)
  }

  async getCouncilElectionData(councilSlug: string, electionDate: string) {
    const electionId = getCouncilElectionId(councilSlug, electionDate)
    return this.getElection(electionId)
  }

  async getWardElectionData(councilSlug: string, wardSlug: string, electionDate: string) {
    const electionId = getCouncilWardElectionId(councilSlug, wardSlug, electionDate)
    return this.getElection(electionId)
  }
}

export default EveryElectionApi
