import Layout from "../../components/Layout";
import ConstituencyElection from "../../components/ConstituencyElection";

export default function SelbyAndAinsty() {
  return (
    <Layout
      shareUrl="https://stopthetories.vote/national/somerton-and-frome"
      shareImage="https://stopthetories.vote/stop-the-tories-vote-july-20th-by-elections-somerset.png"
    >
      <ConstituencyElection
        constituencySlug="somerton-and-frome"
        constituencyName="Somerton and Frome"
        recommendedPartyCode="lib"
        recommendedPartyName="Liberal Democrat"
        recommendedCandidateName="Sarah Dyke"
        currentlyTory={true}
      />
    </Layout>
  );
}