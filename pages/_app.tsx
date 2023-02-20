import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // Import bootstrap js on the client-side only
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
