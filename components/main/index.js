import styles from './style.module.scss'
import { TopArticles, Promo, Services, Programm, Contact } from '/components'

const Main = ({ articlesApi }) => {

  return (
    <div className={styles.main}>
      <Promo />
      <TopArticles
        articlesApi={articlesApi}
      />
      <Services />
      <Programm />
      <Contact />
    </div>
  )
}

export default Main