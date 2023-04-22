import React from 'react'

import headerBackgroundImage from '../assets/hands-bw-66-cropped-compressed-more.jpg'

interface Props {
  children: React.ReactNode
}

export default function Header({ withBackgroundImage=false, children }: Props) {
  let headerStyle = (withBackgroundImage
                      ? { background: `url(${headerBackgroundImage.src}) center / cover no-repeat` }
                      : {}
                    )

  return (
    <header style={headerStyle}>
      <div className="container-fluid py-4 py-md-5">
        <div className="row">
          <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 d-md-flex align-items-md-center">
            <div>
              {children}
              <p>
                <strong>VOTE TACTICALLY</strong> in the <span style={{ textDecoration: "underline" }}>May 4th</span> local elections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
