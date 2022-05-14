import styles from './style.module.scss'
import { articles } from '../../temp/articles'
import { CardArticle, titles } from '/components'

const TopArticles = () => {
  // console.log(articles)
  return (
    <section className={styles.topArticles}>
      <titles.TitleBlock
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