import Image from 'next/image'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ElectionLookup from '../components/ElectionLookup/ElectionLookup'

import headerBackgroundImage from '../assets/hands-bw-66-cropped-compressed-more.jpg'
import insetShadow from '../assets/inset-shadow.png'

export default function Home() {
  return (
    <Layout>
      <Header withBackgroundImage={true}>
        <h1>Take back your Tory council</h1>
      </Header>

      {/* Election lookup */}
      <main>
        <div
          id="search"
          className="container-fluid py-5"
          style={{ background: `var(--bs-pink) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}
        >
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <ElectionLookup />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
