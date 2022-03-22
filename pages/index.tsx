import Head from 'next/head'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <div >
      <Head>
        <title>Mental Cards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  >
      </main>

    </div>
  )
}
