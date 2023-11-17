import Layout from '../components/Layout'
import Header from '../components/Header'

import ActionNetworkContactForm from '../components/ActionNetworkContactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { RWebShare } from 'react-web-share'

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
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h6>The Tories are in chaos.</h6>
              <h6>A general election could come at any moment.</h6>
              <h6 className="text-decoration-underline">Now is the time to get organised.</h6>

              <p className="pt-4 pb-3">
                Together, we can Stop The Tories, fix our democracy, and create a fairer &amp; greener society.
              </p>

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
                we&apos;ll keep you up-to-date on when a General Election is
                happening, tactical voting advice, and all the ways you can help Stop The Tories!
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
          </div>
        </div>
      </main>
    </Layout>
  )
}
