import Image from 'next/image'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ElectionLookup from '../components/ElectionLookup/ElectionLookup'

import headerBackgroundImage from '../assets/hands-bw-66-cropped-compressed-more.jpg'

export default function Home() {
  return (
    <Layout>
      <Header withBackgroundImage={true}>
        <h1>Take back your Tory council</h1>
      </Header>

      <main>
        <ElectionLookup />
      </main>
    </Layout>
  )
}
