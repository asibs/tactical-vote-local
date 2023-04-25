import React from 'react'
import { RWebShare } from "react-web-share";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  url: string
  shareTitle: string
  shareText: string
}

export default function ShareButton({ url, shareTitle, shareText }: Props) {
  return (
    <RWebShare
        data={{
          url: url,
          title: shareTitle,
          text: shareText,
        }}
    >
      <button className="btn btn-primary btn-lg" role="button">
        <FontAwesomeIcon icon={faShareNodes} fixedWidth className="fas text-white" />
        Share with friends & family
      </button>
    </RWebShare>
  )
}
