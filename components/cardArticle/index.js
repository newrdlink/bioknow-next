// import { motion } from "framer-motion"
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Titles } from '/components'

const CardArticle = ({ title = '', subtitle, mainImage = '', id }) => {
  // console.log(mainImage)
  // const variants = {
  //   hidden: { opacity: 0, x: -200, y: 0 },
  //   enter: { opacity: 1, x: 0, y: 0 },
  //   exit: { opacity: 0, x: 0, y: -100 },
  // }
  return (
    <li
      // variants={variants}
      // transition={{ duration: .5 }}
      // animate={{ rotate: 360 }}

      className={styles.cardArticle}>
      <div className={styles.cardArticle__wrapper}>
        <Image src={mainImage} alt={title} layout='fill' />
      </div>
      <div className={styles.cardArticle__content}>
        <Titles.TitleCardItem
          title={title}
          place="cardArticle"
        />
        <Titles.SubtitleCardItem
          subtitle={subtitle}
          place="articleCard"
        />
        <Link href={`/articles/${id}`}><a className={styles.cardArticle__link}>Читать далее...</a></Link>
      </div>
    </li>
  )
}

export default CardArticle