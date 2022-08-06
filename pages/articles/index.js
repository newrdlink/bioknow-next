import styles from './style.module.scss'
import api from 'utils/ApiArtcles'
import { ArticleItem, HeadPage, titles } from 'components'
import { metaInfo } from 'constants/metaInfo'

const Articles = ({ articles = [] }) => {

  return (
    <section className={styles.articles}>
      <HeadPage {...metaInfo.find(el => el.page === 'articles')} />
      <titles.TitleBlock
        title="Мои статьи"
        place="articles"
      />
      <ul className={styles.articles__items}>
        {articles.map((el) => <ArticleItem key={el.id} {...el} place="articles" />)}
      </ul>
    </section>
  )
}

export async function getServerSideProps() {

  const res = await api.getArticles()

  return { props: { articles: res.data } }
}

export default Articles