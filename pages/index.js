import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Coinbase Blockchain App</title>
        <meta name="description" content="This a blockchain application built with thirdWeb and Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Hello Coinbase here
    </div>
  )
}
