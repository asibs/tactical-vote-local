import ElectionLookupForm from './ElectionLookupForm'

import insetShadow from '../../assets/inset-shadow.png'

export default function ElectionLookup() {
  return (
    <div
      id="search"
      className="container-fluid py-5"
      style={{ background: `var(--bs-pink) url(${insetShadow.src}) top no-repeat`, backgroundSize: "100%" }}
    >
      <div className="row">
        <div className="col-12 col-md-8 col-xxl-6 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
          <ElectionLookupForm />
        </div>
      </div>
    </div>
  )
}
