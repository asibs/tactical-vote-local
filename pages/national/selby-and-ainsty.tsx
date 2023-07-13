import Layout from "../../components/Layout"
import ConstituencyElection from "../../components/ConstituencyElection";

export default function SelbyAndAinsty() {
  return (
    <Layout
      shareUrl="https://stopthetories.vote/national/selby-and-ainsty"
      shareImage="https://stopthetories.vote/stop-the-tories-vote-july-20th-by-elections-selby.png"
    >
      <ConstituencyElection
        constituencySlug="selby-and-ainsty"
        constituencyName="Selby and Ainsty"
        recommendedPartyCode="lab"
        recommendedPartyName="Labour"
        recommendedCandidateName="Keir Mather"
        currentlyTory={true}
      />
    </Layout>
  )
}