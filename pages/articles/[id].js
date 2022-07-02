import styles from './style.module.scss'
import api from '../../utils/ApiArtcles'
import ReactMarkdown from 'react-markdown'
import { HeadPage } from 'components'
import Image from 'next/image'

const ArticlePage = ({ articleData = { attributes: {} } }) => {

  const { attributes: data } = articleData

  const { title = "temp", subtitle, article, mainImage = "https://api.bioknow.ru/uploads/zaglushka_86c456634d.jpg?updated_at=2022-07-02T18:08:57.736Z" } = data

  const titlePage = title[0].toUpperCase() + title.slice(1).toLowerCase()

  return (
    <section className={styles.article}>
      <HeadPage
        title={titlePage}
        description={`${subtitle}`}
        keywords="Авторская статья по биологии"
      />
      <div className={styles.article__content}>
        <div className={styles.article__info}>
          <h3 className={styles.article__title}>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={styles.article__imageWrapper}>
          <Image
            src={mainImage}
            alt={`Главная фотография статьи ${title}`}
            width={500}
            height={357}
          />
        </div>
      </div>
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
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await api.getArticle(params.id)
  return { props: { articleData: res.data } }
}