import styles from './style.module.scss'
import Link from 'next/link'

const ArticleItem = ({ id, attributes = {} }) => {
  const { title, subtitle, createdAt } = attributes

  const date = new Date(createdAt)

  return (
    <li key={id} className={styles.articalItem}>
      <p className={styles.articalItem__num}>{id}</p>
      <Link href={`/articles/${id}`}><a className={styles.articalItem__title}>{title}</a></Link>
      <p className={styles.articalItem__subtitle}>{subtitle}</p>
      <p className={styles.articalItem__date}>{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</p>
    </li>
  )
}

export default ArticleItem