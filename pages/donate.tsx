import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Donate() {
  const url = "https://www.crowdfunder.co.uk/p/stopthetories"

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push(url), 2000);
  }, [])

  return (
    <Layout>
      <Header>
        <h1>Donate</h1>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h4 className="pb-5">Redirecting you to our crowdfunder page</h4>
              <p>
                <a href={url} target="_blank" rel="noreferrer">
                  Please click here if you&apos;re not redirected automatically after 3 seconds
                </a>
              </p>
              <p><a href={url} target="_blank" rel="noreferrer">{url}</a></p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
