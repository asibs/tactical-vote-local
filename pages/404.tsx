import Link from 'next/link'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default function PageNotFound() {
  return (
    <Layout>
      <Header>
        <h2>Oops - we can&apos;t find that page</h2>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <p>
                <Link href="/">Back to the home page</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
