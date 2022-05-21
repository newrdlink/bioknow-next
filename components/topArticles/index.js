import styles from './style.module.scss'
import { articles } from '../../temp/articles'
import { CardArticle, titles } from 'components'

const TopArticles = ({ articlesApi }) => {
  // console.log(articlesApi)
  // console.log(articles)
  return (
    <section className={styles.topArticles}>
      <titles.TitleBlock
        title="Популярные статьи"
        place="topArticles" />
      <ul className={styles.topArticles__items}>
        {
          articlesApi.slice(0, 3).map(el =>
            <CardArticle
              key={el.id}
              {...el}
              title={el.attributes.title}
              subtitle={el.attributes.subtitle}
              mainImage={el.attributes.mainImage}
            />)
        }
      </ul>
    </section>
  )
}



export default TopArticles