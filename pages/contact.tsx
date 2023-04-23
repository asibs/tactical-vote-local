import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Contact() {
  return (
    <Layout>
      <Header>
        <h1>Contact</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3>Social Media</h3>
              <p>
                Twitter&nbsp;<a href="https://twitter.com/MVTFWD" target="_blank" rel="noreferrer">@MVTFWD</a>
                &nbsp;|&nbsp;
                <a href="https://twitter.com/GetTheToryOut" target="_blank" rel="noreferrer">@GetTheToryOut</a>
              </p>
              <p>
                Instagram&nbsp;<a href="https://instagram.com/MVTFWD" target="_blank" rel="noreferrer">@MVTFWD</a>
              </p>

              <h3 className="mt-5">Email</h3>
              <p>
                <a href="mailto:team@mvtfwd.com" target="_blank" rel="noreferrer">team@mvtfwd.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
