import styles from './style.module.scss'
import { contacts } from '../../constants/contacts'

const Contacts = () => {
  // console.log(contacts)
  return (
    <div className={styles.contacts}>
      <a href={`tel:` + contacts[0].value} className={styles.contacts__item}>{contacts[0].value}</a>
      <a href={`mailto:` + contacts[1].value} className={styles.contacts__item}>{contacts[1].value}</a>
    </div>
  )
}

export default Contacts