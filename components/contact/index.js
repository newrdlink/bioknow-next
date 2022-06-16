import styles from './style.module.scss'
import { titles, Form } from 'components'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__content}>
        <titles.TitleBlock
          title="Обратная связь"
          place="contact"
        />
        <titles.SubtitleBlock
          subtitle="Возникли вопросы и нет возможности позвонить или написать? Заполните форму для обратной связи"
          place="contact"
        />
      </div>
      <Form />
    </section>
  )
}

export default Contact
