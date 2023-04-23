import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'

import Link from 'next/link'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import ElectionLookup from '../../components/ElectionLookup/ElectionLookup'

const ELECTION_DATA_CSV = 'data/local-tactical-2023-05-04-v1.csv'

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
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 1).map((council) => {
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
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority === 2).map((council) => {
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
          <div className="row">
            <div className="col-12 col-md-8 col-xxl-8 offset-0 offset-md-2 offset-xxl-2 align-items-md-center">
              <h3 className="position-sticky py-3">Non-Tory councils</h3>
              <p><a href="#search">Find your council and how to vote in your ward</a></p>
              <div className="two-columns three-columns">
                <ul className="list-of-councils">
                  {councils.filter((c) => c.priority !== 1 && c.priority !== 2).map((council) => {
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
