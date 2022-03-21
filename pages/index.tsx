import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Mental Cards</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  >
        <Layout>
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <img src="https://st.depositphotos.com/1005979/2976/i/600/depositphotos_29760945-stock-photo-quiz-red-3d-word-test.jpg" className="rounded mx-auto d-block" alt="..."></img>
          </div>
        </Layout>
      </main>

    </div>
  )
}
