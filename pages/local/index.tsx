import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'

import Link from 'next/link'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import ElectionLookup from '../../components/ElectionLookup/ElectionLookup'

const ELECTION_DATA_CSV = 'data/local-tactical-2023-05-04-v9.csv'

interface Props {
  councils: {
    slug: string
    name: string
    priority: number
  }[]
}

export default function BrowseCouncils({ councils }: Props) {
  return (
    <Layout>
      <Header>
        <h2>Tory councils we can take back</h2>
      </Header>

      {/* Content */}
      <main>
        <div className="container-fluid py-3 py-md-5">

          {/* Target Tory Councils */}
          <div className="row pb-5">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="position-sticky py-3">Target Tory councils</h3>
              <p>Councils controlled by the Tory party - or Tory coalitions - that we have a great chance of taking back!</p>
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 1).sort((a,b) => {
                    const x = a.name.toLowerCase()
                    const y = b.name.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                  }).map((council) => {
                    return (
                      <li key={council.slug}>
                        <Link className="party party-conservative" href={`/local/${council.slug}`}>
                          {council.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Target Tory Councils */}
          <div className="row pb-5">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="position-sticky py-3">Other Tory councils</h3>
              <p>Councils with big Tory majorities - we need everyone to vote tactically if we want to take back these councils!</p>
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 2).sort((a,b) => {
                    const x = a.name.toLowerCase()
                    const y = b.name.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                  }).map((council) => {
                    return (
                      <li key={council.slug}>
                        <Link className="party party-conservative" href={`/local/${council.slug}`}>
                          {council.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Tory Councils */}
          <div className="row pb-5">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="position-sticky py-3">Non-Tory councils</h3>
              <p>Councils currently run by other parties where we need to keep the Tories out!</p>
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 3).sort((a,b) => {
                    const x = a.name.toLowerCase()
                    const y = b.name.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                  }).map((council) => {
                    return (
                      <li key={council.slug}>
                        <Link className="party party-none" href={`/local/${council.slug}`}>
                          {council.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Byelection Councils */}
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="position-sticky py-3">Councils with byelections</h3>
              <p>Councils where only 1 or 2 seats are up for election.</p>
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 4).sort((a,b) => {
                    const x = a.name.toLowerCase()
                    const y = b.name.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                  }).map((council) => {
                    return (
                      <li key={council.slug}>
                        <Link className="party party-none" href={`/local/${council.slug}`}>
                          {council.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <ElectionLookup />
      </main>

    </Layout>
  )
}

/* Generate the data for statically rendering /local
// Called once at build-time (or per-request in dev mode)
*/
export async function getStaticProps() {
  const parser = fs
    .createReadStream(path.join(process.cwd(), ELECTION_DATA_CSV))
    .pipe(parse({ columns: true }));

  let councils = []
  for await (const record of parser) {
    const slug = record['council_slug']
    const name = record['council_name']
    const priority = Number(record['Target Priority'])

    if (councils.findIndex(c => c.slug === slug) === -1) {
      councils.push({ slug: slug, name: name, priority: priority })
    }
  }

  return { props: { councils: councils } }
}
