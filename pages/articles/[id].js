import api from '../../utils/ApiArtcles'
import ReactMarkdown from 'react-markdown'


const ArticlePage = ({ article = { attributes: {} } }) => {
  const { attributes: data } = article
  // console.log(data)
  return (
    <section>
      <h3>{data.title}</h3>
      <ReactMarkdown>
        {data.article}
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
  return { props: { article: res.data } }
}