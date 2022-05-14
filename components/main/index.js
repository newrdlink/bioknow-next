import styles from './style.module.scss'
import { TopArticles, Promo, Services, Programm, Contact } from '/components'

const Main = () => {

  return (
    <div className={styles.main}>
      <Promo />
      <TopArticles />
      <Services />
      <Programm />
      <Contact />
    </div>
  )
}

export default Main