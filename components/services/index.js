import styles from './style.module.scss'
import { Titles } from '/components'

const Services = () => {

  return (
    <section className={styles.services}>
      <Titles.TitleBlock
        title="Услуги"
        place="services" />
    </section>
  )
}

export default Services