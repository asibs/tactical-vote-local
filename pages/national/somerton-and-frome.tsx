import ConstituencyElection from "../../components/ConstituencyElection";

export default function SelbyAndAinsty() {
  return <ConstituencyElection
    constituencySlug="somerton-and-frome"
    constituencyName="Somerton and Frome"
    recommendedPartyCode="lib"
    recommendedPartyName="Liberal Democrat"
    recommendedCandidateName="Sarah Dyke"
    currentlyTory={true}
  />
}