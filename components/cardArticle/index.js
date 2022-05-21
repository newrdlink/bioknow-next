// import { motion } from "framer-motion"
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { titles } from '/components'

const CardArticle = ({ title, subtitle, mainImage = '', id }) => {
  const titleMod = title.length > 40 ? title.slice(0, 40) + '...' : title
  const titleModify = titleMod[0].toUpperCase() + titleMod.slice(1).toLowerCase()
  const subtitleMod = subtitle.length > 70 ? subtitle.slice(0, 70) + '...' : subtitle
  const subtitleModify = subtitleMod[0].toUpperCase() + subtitleMod.slice(1).toLowerCase()
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
        <titles.TitleCardItem
          title={titleModify}
          place="cardArticle"
        />
        <titles.SubtitleCardItem
          subtitle={subtitleModify}
          place="articleCard"
        />
        <Link href={`/articles/${id}`}><a className={styles.cardArticle__link}>Читать далее...</a></Link>
      </div>
    </li>
  )
}

export default CardArticle