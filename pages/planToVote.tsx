import Image from 'next/image'

import Layout from '../components/Layout'
import Header from '../components/Header'

import ActionNetworkContactForm from '../components/ActionNetworkContactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { RWebShare } from 'react-web-share'

import posterThumbnail from '../assets/plan-to-vote-thumb.jpg'

export default function PlanToVote() {
  return (
    <Layout>
      <Header>
        <h2>Make your plan to vote</h2>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-4 col-xxl-4 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h5>The Tories are in chaos.</h5>
              <h5>A general election could come at any moment.</h5>
              <h5 className="text-decoration-underline pb-4">Now is the time to get organised.</h5>

              {/*
              <p className="pt-4 pb-3">
                Together, we can Stop The Tories, fix our democracy, and create a fairer &amp; greener society.
              </p>
              */}

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <a href="https://gov.uk/register-to-vote" target="_blank" rel="noreferrer">
                  Register to Vote <sup><FontAwesomeIcon icon={faUpRightFromSquare} /></sup>
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <a href="https://www.gov.uk/how-to-vote/photo-id-youll-need" target="_blank" rel="noreferrer">
                  Get your Voter ID <sup><FontAwesomeIcon icon={faUpRightFromSquare} /></sup>
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <a href="https://www.gov.uk/government/publications/apply-for-a-postal-vote" target="_blank" rel="noreferrer">
                  Request a Postal Vote <sup><FontAwesomeIcon icon={faUpRightFromSquare} /></sup>
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <b>Sign-up for Reminders</b>
              </p>
              <ActionNetworkContactForm />
              <p>
                <i>
                  We&apos;ll keep you up-to-date on when a General Election is happening, tactical
                  voting advice, and all the ways you can help Stop The Tories!
                </i>
              </p>
              <p className="fs-6">
                <a href="https://themovementforward.com/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a>
              </p>

              {/*
              <RWebShare
                  data={{
                    url: "https://stopthetories.vote/planToVote",
                    title: "Stop The Tories",
                    text: "Get registered to vote & Stop The Tories!",
                  }}
              >
                <button className="btn btn-link" role="button">
                  <p><b>Get Family & Friends registered</b> - boost your impact</p>
                </button>
              </RWebShare>
              */}
            </div>

            <div className="col-12 col-md-4 col-xxl-3 align-items-md-center" style={{ position: "relative"}}>
              <h5>Spread the word in your area</h5>
              <p>
                Put this up in your window, your local cafe, or anywhere you can think of.
                <br />
                <a href="/stop-the-tories-vote-001.pdf" download><strong>Click here to download</strong></a>
              </p>

              <a href="/stop-the-tories-vote-001.pdf" download>
                <Image src={posterThumbnail} alt="Plan To Vote poster" style={{ width: "100%", height: "auto" }} />
              </a>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  )
}
