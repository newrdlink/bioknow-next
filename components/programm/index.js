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
          title="Программы по обучению предмета"
          place="programmMain"
        />
        <titles.SubtitleBlock
          subtitle="Содержание основных разделов для изучения предмета и подготовки к экзаменам для поступления в ВУЗы, сдачи эказменов, подготовки к олимпиадам"
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