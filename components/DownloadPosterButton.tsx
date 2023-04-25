import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default function DownloadPosterButton() {
  return (
    <Link href="/posters" className="btn btn-primary btn-lg" role="button">
      <FontAwesomeIcon icon={faFileDownload} fixedWidth className="fas text-white" />
      Put up a poster
    </Link>
  )
}
