import styles from './style.module.scss'
import api from '../../utils/ApiArtcles'
import { ArticleItem, HeadPage, titles } from 'components'

const Articles = ({ articles = [] }) => {
  // console.log(arr[0].id)
  return (
    <section className={styles.articles}>
      <titles.TitleBlock
        title="Мои статьи"
        place="articles"
      />
      <ul className={styles.articles__items}>
        <HeadPage
          title="Мои статьи по биологии"
          description="Страница с авторскими статьями"
          keywords="Статьи по биологии, подготовка к экзамену по биологии, репетитор по биологии"
        />
        {articles.map((el) => <ArticleItem key={el.id} {...el} />)}
        {/* {articles.map((el) => <p key={el.id} {...el}>{el.id}</p>)} */}
      </ul>
    </section>
  )
}
// it works or it is good case
export async function getServerSideProps() {

  const res = await api.getArticles()

  return { props: { articles: res.data } }
}

export default Articles