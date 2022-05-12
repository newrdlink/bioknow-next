import styles from './style.module.scss'
import { articles } from '../../temp/articles'
import { CardArticle, Titles } from '/components'

const TopArticles = () => {
  // console.log(articles)
  return (
    <section className={styles.topArticles}>
      <Titles.TitleBlock
        title="Популярные статьи"
        place="topArticles" />
      <ul className={styles.topArticles__items}>
        {
          articles.map(el => <CardArticle key={el.id} {...el} />)
        }
      </ul>
    </section>
  )
}

export default TopArticles