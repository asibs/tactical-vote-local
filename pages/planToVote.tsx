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
        <h1>Make your plan to vote</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <p>
                We don&apos;t know when the next General Election will be - but if we want to Stop The Tories,
                we need to get organised now.
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <a href="https://gov.uk/register-to-vote" target="_blank">
                  Register to Vote <sup><FontAwesomeIcon icon={faUpRightFromSquare} /></sup>
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <a href="https://www.gov.uk/government/publications/apply-for-a-postal-vote" target="_blank">
                  Request a Postal Vote <sup><FontAwesomeIcon icon={faUpRightFromSquare} /></sup>
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faSquareCheck} fixedWidth className="fas text-white" />
                <b>Signup for Reminders</b> - we&apos;ll keep you up-to-date on when a General Election is
                happening, tactical voting advice, and all the ways you can help Stop The Tories!
              </p>
              <ActionNetworkContactForm />
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
