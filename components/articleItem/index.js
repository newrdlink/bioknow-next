import styles from './style.module.scss'
import Link from 'next/link'

const ArticleItem = ({ id, attributes }) => {
  const { title, subtitle, createdAt, mainImage } = attributes

  const date = new Date(createdAt)
  //console.log(mainImage)

  return (
    <li key={id} className={styles.articalItem}
    // style={{
    //   // background: `no-repeat url(${mainImage}) center/cover`,
    //   // backgroundRepeat: 'no-repeat',
    //   // backgroundSize: 'cover',
    //   // opacity: '.4'

    //   // backgroundImage: `url(${mainImage})`,
    //   // backgroundRepeat: 'no-repeat',
    //   // backgroundSize: 'cover',
    //   // opacity: '.4'
    // }}
    >
      <p className={styles.articalItem__num}>{id}</p>
      <Link href={`/articles/${id}`}><a className={styles.articalItem__title}>{title}</a></Link>
      <p className={styles.articalItem__subtitle}>{subtitle}</p>
      <p className={styles.articalItem__date}>{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</p>
    </li>
  )
}

export default ArticleItem