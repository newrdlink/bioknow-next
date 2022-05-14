import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { titles } from '/components'

const Promo = () => {

  return (
    <section className={styles.promo}>
      <div className={styles.promo__content}>
        <titles.TitleBlock
          title="Easy to Use Cloud Budget Management Software"
          place="promo"
        />
        <titles.SubtitleBlock
          subtitle="Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more."
          place="promo"
        />
        <Link href="/about"><a className={styles.promo__link}>Подробнее...</a></Link>
      </div>
      <div className={styles.promo__img}>
        <Image layout='fill' src={"https://avatars.mds.yandex.net/i?id=2a0000017a0010be9d446030d120daa09bfb-3948701-images-thumbs&n=13"} alt="Фотография автора" />
      </div>
    </section>
  )
}

export default Promo