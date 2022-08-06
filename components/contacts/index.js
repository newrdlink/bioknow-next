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
          styles.contacts__item_type_phone,
          // { [styles.contacts__item_place_npMain]: !isMainPage },
          { [styles.contacts__item_place_npMain]: !isMainPage })}>
        {/* <svg>
          <path fill='#F0F8FF' d="M149.49.88,6,44.34c-7.84,1.82-7.59,8-1.79,9.51l35.94,9L53.94,96.57c1.67,3.69,3,5.08,5.89,5.11s4.15-.84,7.27-3.05c3.65-2.74,9.2-7.06,18-13.89l37.39,22.11c6.88,3,11.84,1.46,13.56-5.12L159.48,9C162,.89,156.07-1.51,149.49.88ZM45.83,60.76l81.72-41c4-2.16,5.29.25,3.47,1.91L63.19,70.47,59.71,94.83Z" />
        </svg> */}
        {contacts[0].value}
      </a>
      <a href={`mailto:` + contacts[1].value}
        className={cn(styles.contacts__item,
          styles.contacts__item_type_mail,
          { [styles.contacts__item_place_npMain]: !isMainPage })}>
        {contacts[1].value}
      </a>
    </div>
  )
}

export default Contacts