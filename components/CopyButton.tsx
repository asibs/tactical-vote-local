import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCopy,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  textToCopy: string
  buttonText: string
  onClickButtonText: string
}

export default function CopyButton({ textToCopy, buttonText, onClickButtonText }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2500);
  }

  return (
    <button onClick={copyUrlToClipboard} className="btn btn-primary btn-lg" role="button" disabled={isCopied}>
      {isCopied
        ? (
          <>
            <FontAwesomeIcon icon={faClipboardCheck} fixedWidth className="fas text-white" />
            {onClickButtonText}
          </>
        )
        : (
          <>
            <FontAwesomeIcon icon={faCopy} fixedWidth className="fas text-white" />
            {buttonText}
          </>
        )
      }
    </button>
  )
}
