import { motion } from "framer-motion"
import styles from './style.module.scss'

const MainTitle = () => {

  return (
    <section className={styles.mainTitle}>
      <h1 className={styles.mainTitle__title}>Изучение биологии</h1>
      <p className={styles.mainTitle__subtitle}>Один шаг в обучении это сто шагов в развитии</p>

      <motion.button
        type="button"
        whileHover={{ scale: 1.2 }}
        className={styles.mainTitle__button}>Хочу учится</motion.button>
    </section>
  )
}

export default MainTitle