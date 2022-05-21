import styles from './style.module.scss'
import api from '../../utils/ApiArtcles'
import ReactMarkdown from 'react-markdown'
import { HeadPage } from 'components'

const ArticlePage = ({ articleData = { attributes: {} } }) => {
  const { attributes: data } = articleData
  const { title = "temp", subtitle, article } = data

  const titlePage = title[0].toUpperCase() + title.slice(1).toLowerCase()

  return (
    <section className={styles.article}>
      <HeadPage
        title={titlePage}
        description={`${subtitle}`}
        keywords="Авторская статья по биологии"
      />
      <h3 className={styles.article__title}>{title}</h3>
      <p>{subtitle}</p>
      <ReactMarkdown>
        {article}
      </ReactMarkdown>
    </section>

  )
}

export default ArticlePage

export const getStaticPaths = async () => {
  const res = await api.getArticles()
  const { data: arr } = res

  const paths = arr.map(el => {
    return {
      params: { id: el.id.toString() }
    }
  })

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await api.getArticle(params.id)
  return { props: { articleData: res.data } }
}