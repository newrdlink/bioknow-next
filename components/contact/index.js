import styles from './style.module.scss'
import { titles, Form } from 'components'
import { info } from 'constants/formData'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__content}>
        <titles.TitleBlock
          title="Обратная связь"
          place="contact"
        />
        <titles.SubtitleBlock
          subtitle={info.subtitle}
          place="contact"
        />
      </div>
      <Form />
    </section>
  )
}

export default Contact
