import styles from './style.module.scss'
import api from '../../utils/ApiArtcles'
import { ArticleItem, HeadPage, titles } from 'components'

const Articles = ({ data }) => {

  const { data: arr } = data
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
        {arr.map((el) => <ArticleItem key={el.id} {...el} />)}
      </ul>
    </section>
  )
}
// it works or it is good case
export async function getStaticProps() {

  const res = await api.getArticles()

  return { props: { data: res } }
}

export default Articles