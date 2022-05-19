import api from '../../utils/ApiArtcles'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const Articles = ({ data = {} }) => {
  // const [articles, setArticles] = useState([])
  const { data: arr } = data
  // setArticles(arr)
  // console.log(arr)
  // console.log(arr[1].attributes.article)

  return (
    <ul>
      {arr.map((el) => <li key={el.id}><Link href={`/articles/${el.id}`}><a>{el.attributes.title}</a></Link></li>)}
    </ul>
  )
}

// it works or it is good case
export async function getStaticProps() {
  // Fetch data from external API
  // const res = await fetch(`http://api.bioknow.ru/api/articles`)
  const res = await api.getArticles()

  // Pass data to the page via props
  return { props: { data: res } }
}

export default Articles