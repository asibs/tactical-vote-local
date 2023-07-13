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
      </Header>

      <main>
        {/* By-elections, show a list of by-elections with links */}
        <ByElectionSelect />


        {/* During by-elections, we want to encourage signups / donations for the general election */}
        <div
          className="container-fluid py-5"
          style={{ background: `var(--bs-gray-900) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}
        >
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>Don&apos;t have a by-election on May 20th?</h3>

              <p className="pt-4">
                <Link href="/donate" className="btn btn-pink btn-lg" role="button">
                  CHIP IN SO WE&apos;RE READY<br />
                  FOR THE GENERAL ELECTION
                </Link>
              </p>

              <p className="pt-4">
                <strong>Keep up-to-date with our newsletter, updates, and important alerts</strong>
              </p>
              <ActionNetworkContactForm />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
