import styles from '../styles/variables.module.scss'
import { Main, MainTitle, Overlay, HeadPage } from 'components'
import Script from 'next/script'
import api from '../utils/ApiArtcles'


const App = ({ articlesApi = [] }) => {
  // console.log(articlesApi)
  return (
    <main className="main">
      <HeadPage
        title="Репетитор по биологии"
        description="Главная страница репетитора по биологии"
        keywords="Репетитор по биологии, подготовка к экзаменам по биологии"
      />
      <Script src="/index.js" type='text/javascript' />
      <Overlay />
      <MainTitle />
      <Main
        articlesApi={articlesApi}
      />
    </main>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.getArticles()

  return { props: { articlesApi: res.data } }
}

export default App
