import ConstituencyElection from "../../components/ConstituencyElection";

export default function SelbyAndAinsty() {
  return <ConstituencyElection
    constituencySlug="selby-and-ainsty"
    constituencyName="Selby and Ainsty"
    recommendedPartyCode="lab"
    recommendedPartyName="Labour"
    recommendedCandidateName="Keir Mather"
    currentlyTory={true}
  />
}