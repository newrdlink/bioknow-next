import styles from '../styles/variables.module.scss'
import Head from 'next/head'
import { Main, MainTitle, Overlay } from '../components'
import Script from 'next/script'


export default function App() {
  return (
    <main className="main">
      <Head>
        <title>Репититор по биологии</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/static/yandexMetrica.js" type='text/javascript' />
      <Overlay />
      <MainTitle />
      <Main />
    </main>
  )
}
