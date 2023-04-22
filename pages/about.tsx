import Link from 'next/link'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default function About() {
  return (
    <Layout>
      <Header>
        <h1 className="text-uppercase fw-bold">About</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="text-uppercase fw-bold">How this works</h3>
              <p>If there is a Tory councillor in your ward, the best way to get them out is to all vote for the most likely opposition candidate to be able to beat them.</p>
              <p>In many places the numbers needed to flip a council seat are very small. This isn't a parliamentary general election and many council wards only have a few hundred voters.</p>
              <p>So tell a friend, and share this website in your local community!</p>

              <h3 className="text-uppercase fw-bold mt-5" id="how">How we're working out the recommendations</h3>
              <p>This website is focusing on Tory led councils only.</p>
              <p>There are around 30 councils the Tories lead but don't even have a majority of councillors.</p>
              <p>And around another 30 where they do have a majority and will be harder to remove.</p>
              <p>In every ward we've worked out which opposition party's candidate has the best chance of winning by looking back at the votes from the previous election.</p>
              <p>We then recommend that candidate to get behind.</p>

              <h3 className="text-uppercase fw-bold mt-5">Have some info we need to know?</h3>
              <p>Please fill in this Google form with the info you have. We can't reply to everything, but all info will be taken into consideration. Thanks!</p>
              <p>
                <a className="btn btn-primary btn-sm me-2" role="button" href="https://forms.gle/8eYAwTVh728W31bN7" style={{ "--bs-body-font-size": "2rem" }} target="_blank">
                  Submit info
                </a>
              </p>

              <h3 className="text-uppercase fw-bold mt-5">Who operates this website</h3>
              <p>This is a new project by <a href="https://forwarddemocracy.com" target="_blank">Forward Democracy</a>, started in 2023.</p>
              <p>Forward Democracy also run The Movement Forward, Swap My Vote, and Hey News.</p>
              <p>We're a group of so-far unpaid volunteers&nbsp;(with the exception of modest crowdfunding) who have been working on democracy projects since at least 2017.</p>

              <h3 className="text-uppercase fw-bold mt-5">How you can support this project</h3>
              <p>This is first run of this platform that we plan to use to mobilise voters at all upcoming elections. You can donate to our Crowdfunder, or get in touch to talk about larger support.</p>
              <p className="my-3">
                <Link className="btn btn-primary btn-sm me-2" role="button" href="/donate" style={{ "--bs-body-font-size": "2rem" }}>
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
