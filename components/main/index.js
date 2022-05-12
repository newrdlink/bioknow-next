import styles from './style.module.scss'
import { TopArticles, Promo, Services, Programm } from '/components'

const Main = () => {

  return (
    <div className={styles.main}>
      <Promo />
      <TopArticles />
      <Services />
      <Programm />
    </div>
  )
}

export default Main