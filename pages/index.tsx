import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ByElectionSelect from '../components/ByElectionSelect'
import ActionNetworkContactForm from '../components/ActionNetworkContactForm'

import headerBackgroundImage from '../assets/hands-bw-66-cropped-compressed-more.jpg'
import insetShadow from '../assets/inset-shadow.png'

export default function Home() {
  return (
    <Layout>
      <Header withBackgroundImage={true}>
        <h1>Take back your Tory seat</h1>
        {/*
        <p>
          <strong>VOTE TACTICALLY</strong> in the <span style={{ textDecoration: "underline" }}>July 20th</span> by-elections.
        </p>
        */}
      </Header>

      <main>
        {/* By-elections, show a list of by-elections with links */}
        {/* <ByElectionSelect /> */}

        <div className="container-fluid py-5 bg-pink">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="pb-2">The goal is to totally dominate the narrative at the next election.</h3>
              <p>
                We&apos;re taking tactical voting mainstream, making it clear that it was us
                - <b>the voters</b> - who showed up to use our votes to remove the Tories.
              </p>
              <p>
                But that we shouldn&apos;t have to do that!
              </p>
              <p>
                Really we want to be able to vote <i>for</i> something in future, not forced to
                vote against things any more.
              </p>
              <p>
                So we&apos;re also showing up to make sure the next government understands that
                we want <b>Proportional Representation</b>. So we can vote with our hearts,
                voting <i>for</i> the things we care about.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 bg-gray-gradient">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="pb-2">Can you chip in?</h3>
              <p>
                We helped vote out over 1000 Tory councillors with almost nothing in the
                2023 local elections.
              </p>
              <p>
                But our small team of volunteers is up against a very well funded election machine.
              </p>

              <p className="pt-2">
                <Link href="/donate" className="btn btn-pink btn-lg" role="button">
                  OUR GENERAL ELECTION CROWDFUNDER
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 bg-gray-gradient">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="pb-2">
                Join the <a href="https://mvtfwd.com/" target="_blank" rel="noreferrer">Movement Forward</a> newsletter
              </h3>
              <p>
                Keep up-to-date with important alerts and things you can do.
              </p>
              <ActionNetworkContactForm />
              <p>
                <small className="text-muted">
                  <a href="https://mvtfwd.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
