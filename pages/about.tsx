import Link from 'next/link'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default function About() {
  return (
    <Layout>
      <Header>
        <h1>About</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>How tactical voting works</h3>
              <p>If there is a Tory councillor in your ward, the best way to get them out is to all vote for the most likely opposition candidate to be able to beat them.</p>
              <p>In many places the numbers needed to flip a council seat are very small. This isn&apos;t a parliamentary general election and many council wards only have a few hundred voters.</p>
              <p>So tell a friend, and share this website (<Link href="/posters">and poster</Link>) in your local community!</p>

              <h3 className="mt-5">Tactical voting sucks!</h3>
              <p>Yes, we agree!</p>
              <p>Ideally our system of elections would be fairer, counting all votes the equally, measuring votes proportionally.</p>
              <p>Which is why we&apos;re supporters of Proportional Representation, which would almost remove the need for voting tactically.</p>
              <p>Not only would it make government more representative, people voting with their ideals, goals, and their hearts... it would also make it much harder to game our elections.</p>
              <p>We&apos;re members of the <a href="https://www.makevotesmatter.org.uk/the-pr-alliance" target="_blank" rel="noreferrer">Make Votes Matter Alliance</a>, along with a huge number of other organisations.</p>

              <h3 className="mt-5">Target councils</h3>
              <p>This website is prioritising flipping Tory led councils to progressive councillors.</p>
              <p>There are over 60 councils the Tories lead where the progressive votes have a good chance of winning by tactically voting for the most likely opposition party to win in a ward.</p>
              <p>And around another 45 where it will be harder, but a higher turnout could make the difference.</p>
              <p>Many wards could change with only a handful more votes.</p>

              <h3 className="mt-5">How we&apos;re working out the recommendations</h3>
              <p>In every ward we&apos;ve worked out which opposition party&apos;s candidate has the best chance of winning by looking back at the votes from the previous elections.</p>
              <p>We average the votes for each party across all their candidates in the ward, and in Tory wards use this to work out which opposition parties came second, third, fourth, etc. </p>
              <p>We then recommend those parties to get behind.</p>
              <p>If the party we recommend isn&apos;t standing enough candidates in a ward, then we recommend the next party for the next seat. And continue to do that until we have recommendations for all seats in a ward.</p>
              <p>This can mean that we recommend candidates from multiple parties in a single ward.</p>
              <p>Or in some circumstances that we can only offer recommendations for one or two seats, if there aren&apos;t enough opposition candidates from all parties standing in that ward, or if it&apos;s unclear which progressive party is best placed to beat the Tories.</p>

              <h3 className="mt-5">Independent candidates</h3>
              <p>There&apos;s more opportunity for candidates not associated with a major political party to run for election in local elections.</p>
              <p>They cover a broad political spectrum, and there are potentially thousands of them.</p>
              <p>For this reason it&apos;s very hard to know much about their politics, and so we made the decision to only make recommendations for candidates from Labour, the Liberal Democrats, and The Green Party.</p>
              <p>If an independent candidate is standing or is incumbent in a seat, we encourage you to find out what you can about them before committing to your vote.</p>

              <h3 className="mt-5">Wards without recommendations</h3>
              <p>In some cases ward names or boundaries have changed, meaning there&apos;s no historic voting data for us to use.</p>
              <p>In priority cases we&apos;ve tried to calculate a recommendation manually if there was a clear progressive vote in the previous shape of ward.</p>

              <h3 id="missing-elections" className="mt-5">Missing elections</h3>
              <p>Not everywhere has elections this year. Most English councils have elections, but some don&apos;t - such as London councils.</p>
              <p><strong>If we&apos;re missing information about an election, please <a href="#info-we-need">let us know</a> using the Google form below</strong> - include the name of your council & ward, your postcode, and any links about the election in your area.</p>
              <p>If you don&apos;t have an election at the moment, you can still share the site with people you know who live elsewhere in the country, and you can <Link href="/reminders">sign up for updates</Link> for information about future elections - there&apos;s plenty to get involved in!</p>

              <h3 id="info-we-need" className="mt-5">Have some info we need to know?</h3>
              <p>Sometimes there&apos;s something we missed - if you can link us to information we should take into account, please let us know.</p>
              <p>Fill in this Google form with the info you have.</p>
              <p><a className="btn btn-primary btn-sm me-2" role="button" href="https://forms.gle/8eYAwTVh728W31bN7" style={{ ["--bs-body-font-size" as any]: "2rem" }} target="_blank" rel="noreferrer">Submit info</a></p>
              <p>We can&apos;t reply to everything, but all info will be taken into consideration. Thanks!</p>

              <h3 className="mt-5">Who operates this website</h3>
              <p>This is a new project by&nbsp;<a href="https://forwarddemocracy.com/" target="_blank" rel="noreferrer">Forward Democracy</a>, and was started in 2023.</p>
              <p>Forward Democracy also run <a href="https://mvtfwd.com" target="_blank" rel="noreferrer">The Movement Forward</a>&nbsp;and&nbsp;<a href="https://swapmyvote.uk" target="_blank" rel="noreferrer">Swap My Vote</a>.</p>
              <p>We&apos;re a group of so-far unpaid volunteers (with the exception of modest crowdfunding) who have been working on democracy projects since at least 2015. Individually much longer.</p>
              <p>We are not affiliated with any political party, or financed by them.</p>

              <h3 className="mt-5">How you can support this project</h3>
              <p>This is first run of this platform, which we plan to use to mobilise voters at all upcoming elections.</p>
              <p>We aim to continue the development of this platform and support campaigns to help people show up and own their future!</p>
              <p>You can donate to our Crowdfunder, or get in touch to talk about larger or ongoing support.</p>
              <p className="my-3">
                <Link className="btn btn-primary btn-sm me-2" role="button" href="/donate" style={{ ["--bs-body-font-size" as any]: "2rem" }}>
                  Donate
                </Link>
                <Link className="btn btn-secondary btn-sm me-2" role="button" href="/contact">
                  Contact
                </Link>
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
