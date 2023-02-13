import 'bootstrap/dist/css/bootstrap.css'
// import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  // Import bootstrap js on the client-side only
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return (
    <>
      <NavBar />
      <div className="container-md">
        <Component {...pageProps} />
      </div>
    </>
  )
}
