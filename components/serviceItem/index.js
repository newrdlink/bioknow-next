import styles from './style.module.scss'
import { Titles } from '/components'
import Image from 'next/image'
import cn from 'classnames'
import { motion } from "framer-motion"

const ServiceItem = ({ title, image, id, type, subtitle }) => {

  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      className={styles.serviceItem}>
      <div className={cn(styles.serviceItem__wrapper, styles[type])}>
        <Image src={image.src} alt={`Иконка ${title}`} layout='fill' />
      </div>
      <span className={styles.serviceItem__num}>{`0${id}`}</span>
      <Titles.TitleCardItem
        title={title}
        place='serviceItem'
      />
      <Titles.SubtitleCardItem
        subtitle={subtitle}
        place="serviceCard"
      />
    </motion.li>
  )
}

export default ServiceItem