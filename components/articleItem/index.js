import styles from './style.module.scss'
import Link from 'next/link'

const ArticleItem = ({ id, attributes }) => {
  const { title, subtitle, createdAt, mainImage } = attributes
  // console.log(createdAt)
  const month = createdAt.slice(5, 7)
  const day = createdAt.slice(8, 10)
  const year = createdAt.slice(0, 4)

  return (
    <li key={id} className={styles.articalItem}
      style={{
        // background: `no-repeat url(${mainImage}) center/cover`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // opacity: '.4'

        // backgroundImage: `url(${mainImage})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // opacity: '.4'
      }}
    >
      <p className={styles.articalItem__num}>{id}</p>
      <Link href={`/articles/${id}`}><a className={styles.articalItem__title}>{title}</a></Link>
      <p className={styles.articalItem__subtitle}>{subtitle}</p>
      <p className={styles.articalItem__date}>
        {`${day} / ${month} / ${year}`}
      </p>
    </li>
  )
}

export default ArticleItem