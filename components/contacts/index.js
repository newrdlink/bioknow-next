import styles from './style.module.scss'
import { useRouter } from 'next/dist/client/router'
import { contacts } from '../../constants/contacts'
import cn from 'classnames'

const Contacts = () => {
  const router = useRouter()
  const isMainPage = router.pathname === '/'

  return (
    <div className={styles.contacts}>
      <a href={`tel:` + contacts[0].value}
        className={cn(styles.contacts__item,
          { [styles.contacts__item_place_npMain]: !isMainPage })}>
        {contacts[0].value}
      </a>
      <a href={`mailto:` + contacts[1].value}
        className={cn(styles.contacts__item,
          { [styles.contacts__item_place_npMain]: !isMainPage })}>
        {contacts[1].value}
      </a>
    </div>
  )
}

export default Contacts