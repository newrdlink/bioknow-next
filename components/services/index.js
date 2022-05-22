import styles from './style.module.scss'
import { titles, CardService } from 'components'
import { services } from '../../constants/services'

const Services = () => {
  // console.log(services)
  return (
    <section className={styles.services} id="services">
      <titles.TitleBlock
        title="Услуги"
        place="services" />
      <ul className={styles.services__items}>
        {
          services.map((el) => <CardService key={el.id} {...el} />)
        }
      </ul>
    </section>
  )
}

export default Services