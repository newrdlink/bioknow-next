import styles from './style.module.scss'
import { TopArticles, Promo, Services } from '/components'

const Main = () => {

  return (
    <div className={styles.main}>
      <Promo />
      <TopArticles />
      <Services />
    </div>
  )
}

export default Main