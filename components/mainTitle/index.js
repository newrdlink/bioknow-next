import { motion } from "framer-motion"
import styles from './style.module.scss'
import { MButton } from "components"
import { Link, animateScroll as scroll } from "react-scroll"

const MainTitle = () => {

  return (
    <section className={styles.mainTitle}>
      <h1 className={styles.mainTitle__title}>Изучение биологии</h1>
      <p className={styles.mainTitle__subtitle}>Один шаг в обучении это сто шагов в развитии</p>

      {/* <motion.button
        type="button"
        whileHover={{ scale: 1.2 }}
        className={styles.mainTitle__button}>Хочу учится</motion.button> */}

      <Link
        to="services"
        smooth={true}
        duration={500}
      >
        <MButton
          type="button"
          place="mainTitle"
          name="хочу учится"
          whileHover={{ scale: 1.2 }}
        />
      </Link>
    </section>
  )
}

export default MainTitle