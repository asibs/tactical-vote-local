import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ElectionLookup from '../components/ElectionLookup/ElectionLookup'
import ActionNetworkContactForm from '../components/ActionNetworkContactForm'

import headerBackgroundImage from '../assets/hands-bw-66-cropped-compressed-more.jpg'
import insetShadow from '../assets/inset-shadow.png'

export default function Home() {
  return (
    <Layout>
      <Header withBackgroundImage={true}>
        <h1>Take back your Tory council</h1>
      </Header>

      <main>
        {/* Polls closed, so hide election lookup on main page in favour of contact / donate buttons
          <ElectionLookup />
        */}

        {/* Post-polling day contact / donate */}
        <div
          id="search"
          className="container-fluid py-5"
          style={{ background: `var(--bs-pink) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}
        >
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>Polls are now closed</h3>

              <p className="pt-4">
                <Link href="/donate" className="btn btn-pink btn-lg" role="button">
                  CHIP IN SO WE&apos;RE READY<br />
                  FOR THE GENERAL ELECTION
                </Link>
              </p>

              <p className="pt-4">
                <strong>Keep up-to-date with our newsletter, updates, and important reminders</strong>
              </p>
              <ActionNetworkContactForm />

              <p className="pt-4">
                You can still <Link href="/local">browse the recommendations</Link> we made for the May 4th local elections.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
