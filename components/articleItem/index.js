import styles from './style.module.scss'
import createdTime from 'helpers/createdTime'
import Link from 'next/link'

const ArticleItem = ({ id, attributes, place }) => {
  const { title, subtitle, createdAt, mainImage } = attributes

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
      <div className={styles.articalItem__about}>
        <p className={styles.articalItem__num}>{id}</p>
        <p className={styles.articalItem__date}>
          <span className={styles.articalItem__add}>{"Добавлено:"}</span>
          {createdTime(createdAt)}
        </p>
      </div>

      <h6 className={styles.articalItem__title}>{title}</h6>
      <p className={styles.articalItem__subtitle}>{subtitle}</p>

      <Link href={`/${place}/${id}`}><a className={styles.articalItem__link}>{"Читать..."}</a></Link>
    </li>
  )
}

export default ArticleItem