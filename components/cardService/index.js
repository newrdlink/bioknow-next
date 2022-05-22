import styles from './style.module.scss'
import { titles } from 'components'
import Image from 'next/image'
import cn from 'classnames'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import Link from 'next/link'

const CardService = ({ title, image, id, type, subtitle }) => {
  const router = useRouter()

  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      className={styles.serviceItem}
    // onClick={() => router.push({ pathname: '/services', query: { id } })}
    >
      <Link href={`/services?id=${id}`}>
        <a className={styles.serviceItem__link}>
          <div className={cn(styles.serviceItem__wrapper, styles[type])}>
            <Image src={image.src} alt={`Иконка ${title}`} layout='fill' />
          </div>
          <span className={styles.serviceItem__num}>{`0${id}`}</span>
          <titles.TitleCardItem
            title={title}
            place='serviceItem'
          />
          <titles.SubtitleCardItem
            subtitle={subtitle}
            place="serviceCard"
          />
        </a>

      </Link>


    </motion.li>
  )
}

export default CardService