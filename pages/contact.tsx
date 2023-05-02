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
              <h3>Contact Form</h3>
              <p>
                If we&apos;ve missed somthing and you can link us to information we should take into account,
                please let us know by filling in the Google form below.
              </p>
              <p>
                <a className="btn btn-primary btn-sm me-2" role="button" href="https://forms.gle/8eYAwTVh728W31bN7" style={{ ["--bs-body-font-size" as any]: "2rem" }} target="_blank" rel="noreferrer">Submit info</a>
              </p>
              <p>
                We can&apos;t reply to everything, but all info will be taken into consideration. Thanks!
              </p>


              <h3 className="mt-5">Social Media</h3>
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
                please use the contact form above for any information that will help us make better tactical voting
                recommendations, or if you think we&apos;re missing an election in your area. This will help us keep
                track of all the information submitted.
              </p>
              <p>
                <a href="mailto:team@mvtfwd.com" target="_blank" rel="noreferrer">team@mvtfwd.com</a>
              </p>

              <h3 className="mt-5">Press</h3>
              <p>
                Please find our launch press release here:
                <br />
                <a href="/launch-of-uks-first-tactical-voting-website-for-uk-local-election-02-05-2023.pdf" target="_blank" rel="noreferrer">
                  LAUNCH OF UK&apos;S FIRST TACTICAL VOTING WEBSITE FOR UK LOCAL ELECTIONS [PDF]
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
