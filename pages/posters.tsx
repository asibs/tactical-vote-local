import Image from 'next/image'

import Layout from '../components/Layout'
import Header from '../components/Header'

import posterThumbnail from '../assets/stop-the-tories-vote-001-thumb.gif'

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
              <a href="/stop-the-tories-vote-001.pdf" download>
                <Image src={posterThumbnail} alt="Stop The Tories poster" style={{ width: "100%", height: "auto" }} />
              </a>
            </div>
            <div className="col-8 col-md-4 col-xxl-3 align-items-md-center" style={{ paddingTop: "2rem" }}>
              <ul>
                <li>
                  <a href="/stop-the-tories-vote-001.pdf" download><strong>Click here to download the poster</strong></a>
                </li>
                <li><strong>Print A4 at 100%</strong> - use eco mode to save ink</li>
                <li><strong>Write your name and email in the spaces provided</strong> (this is required by the Electoral Commission)</li>
                <li>Cut strips for easy tearing</li>
                <li><strong>Put up everywhere!</strong></li>
                <li>Post a photo of your poster in the wild and tag <a href="https://mvtfwd.com/links" target="_blank" rel="noreferrer">@MVTFWD</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
