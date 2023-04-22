import Image from 'next/image'

import Layout from '../components/Layout'
import Header from '../components/Header'

import poster from '../assets/stop-the-tories-dot-vote-a4-poster.png'

export default function Posters() {
  return (
    <Layout>
      <Header>
        <h1>Posters</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>Spread the word in your area</h3>
              <p>Put this up in your window, your local cafe, or anywhere you can think of</p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-md-4 col-xxl-3 offset-0 offset-md-2 offset-xxl-2 align-items-md-center" style={{ position: "relative"}}>
              <Image src={poster} alt="Stop The Tories poster" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-8 col-md-4 col-xxl-3 align-items-md-center" style={{ paddingTop: "2rem" }}>
              <ul>
                <li>Right click and save</li>
                <li>Print A4 at 100%</li>
                <li>Use eco mode to save ink</li>
                <li>Cut strips for easy tearing</li>
                <li>Put up everywhere!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
