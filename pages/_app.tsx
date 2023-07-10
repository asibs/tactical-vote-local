import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react'

import { Rubik } from '@next/font/google';
const rubik = Rubik({ subsets: ['latin'] });

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  // Import bootstrap js on the client-side only
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return (
    <>
      {/* Make rubik font available as a CSS var */}
      <style jsx global>{`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
