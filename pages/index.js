import styles from '../styles/variables.module.scss'
import { Main, MainTitle, Overlay, HeadPage } from '../components'
import Script from 'next/script'


export default function App() {
  return (
    <main className="main">
      <HeadPage
        title="Репетитор по биологии"
        description="Главная страница репетитора по биологии"
        keywords="Репетитор по биологии, подготовка к экзаменам по биологии"
      />
      <Script src="/static/index.js" type='text/javascript' />
      <Overlay />
      <MainTitle />
      <Main />
    </main>
  )
}
