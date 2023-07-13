import Layout from '../components/Layout'
import Header from '../components/Header'

import ActionNetworkContactForm from '../components/ActionNetworkContactForm'

export default function Reminders() {
  return (
    <Layout>
      <Header>
        <h1>Get @MVTFWD reminders</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>We&apos;ll email you what you need, when you need it.</h3>
              <p>Get our newsletter, updates, and the important alerts you need just at the right times.</p>

              <ActionNetworkContactForm />

              <p className="fs-6">
                <a href="https://themovementforward.com/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
