import styles from './style.module.scss'
import api from '../../utils/ApiArtcles'
import { ArticleItem, HeadPage } from '/components'

const Articles = ({ data = {} }) => {

  const { data: arr } = data

  return (
    <ul className={styles.articles}>
      <HeadPage
        title="Мои статьи по биологии"
        description="Страница с авторскими статьями"
        keywords="Статьи по биологии, подготовка к экзамену по биологии, репетитор по биологии"
      />
      {arr.map((el) => <ArticleItem key={el.id} {...el} />)}
    </ul>
  )
}
// it works or it is good case
export async function getStaticProps() {

  const res = await api.getArticles()

  return { props: { data: res } }
}

export default Articles