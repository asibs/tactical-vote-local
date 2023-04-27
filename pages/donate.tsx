import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Donate() {
  {/*
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push("https://google.com"), 2000);
  }, [])
  */}

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
              <h4>Coming Soon...</h4>

              {/*
              <h4>Redirecting you</h4>
              <p>
                If you&apos;re not redirected automatically, please <a href="https://google.com" target="_blank" rel="noreferrer">click here</a>
              </p>
              */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
