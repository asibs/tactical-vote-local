import Layout from "../../components/Layout";
import ConstituencyElection from "../../components/ConstituencyElection";

export default function UxbridgeAndSouthRuislip() {
  return (
    <Layout
      shareUrl="https://stopthetories.vote/national/uxbridge-and-south-ruislip"
      shareImage="https://stopthetories.vote/stop-the-tories-vote-july-20th-by-elections-uxbridge"
    >
      <ConstituencyElection
        constituencySlug="uxbridge-and-south-ruislip"
        constituencyName="Uxbridge and South Ruislip"
        recommendedPartyCode="lab"
        recommendedPartyName="Labour"
        recommendedCandidateName="Danny Beales"
        currentlyTory={true}
      />
    </Layout>
  );
}