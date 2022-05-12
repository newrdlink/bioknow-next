import { useRouter } from 'next/router'

const ArticlePage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <p>
      {id}
    </p>
  )
}

export default ArticlePage