import Link from 'next/link'

import insetShadow from '../assets/inset-shadow.png'

export default function ByElectionSelect() {
  return (
    <div
      className="container-fluid py-5 bg-black bg-gradient"
    >
      <div className="row">
        <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
          <h3>How to vote tactically on July 20th:</h3>
          <ul className="list-of-constituencies">
            <li><Link href="/national/uxbridge-and-south-ruislip" className="party-lab">Uxbridge and South Ruislip</Link></li>
            <li><Link href="/national/selby-and-ainsty" className="party-lab">Selby and Ainsty</Link></li>
            <li><Link href="/national/somerton-and-frome" className="party-lib">Somerton and Frome</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
