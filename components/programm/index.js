import styles from './style.module.scss'
import { useRouter } from 'next/router'
import { titles, MButton } from '/components'
import Image from 'next/image'
import cn from 'classnames'
import img from '../../images/programm1.jpg'

const Programm = () => {
  const router = useRouter()
  // console.log(router)
  return (
    <section className={styles.programm}>
      <div className={styles.programm__content}>
        <titles.TitleBlock
          title="Stay focused on saving money"
          place="programm"
        />
        <titles.SubtitleBlock
          subtitle="It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!"
          place="programm"
        />
        <MButton
          name="Подробнее"
          place="programm"
          whileHover={{ x: 20 }}
          onClick={() => router.push('/programms')}
        />
      </div>
      <div className={styles.programm__images}>
        <div className={cn(styles.programm__wrapper, styles.programm__wrapper_pos_one)}>
          <Image src={img} alt="Фотография программы" />
        </div>
        <div className={cn(styles.programm__wrapper, styles.programm__wrapper_pos_two)}>
          <Image src={img} alt="Фотография программы" />
        </div>
        <div className={cn(styles.programm__wrapper)}>
          <Image src={img} alt="Фотография программы" />
        </div>
      </div>

    </section>
  )
}

export default Programm