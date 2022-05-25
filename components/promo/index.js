import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { titles } from 'components'
import { aboutInfo } from '../../constants/about'

const Promo = () => {

  return (
    <section className={styles.promo}>
      <div className={styles.promo__content}>
        <titles.TitleBlock
          title={aboutInfo.title}
          place="promo"
        />
        <titles.SubtitleBlock
          subtitle={aboutInfo.subtitle.slice(0, 145)}
          place="promo"
        />
        <Link href="/about"><a className={styles.promo__link}>Далее ...</a></Link>
      </div>
      <div className={styles.promo__img}>
        <Image layout='fill' src={aboutInfo.image} alt="Фотография автора" />
      </div>
    </section>
  )
}

export default Promo