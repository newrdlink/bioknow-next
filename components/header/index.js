import styles from './style.module.scss'
import { Contacts, Nav, Logo } from '/components'
import { WidthScreen } from 'utils/widthScreen'


const Header = () => {
  // console.log(WidthScreen().width> 450)
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__content}>
        {WidthScreen().width > 500 && <Nav />}
        {WidthScreen().width > 500 && <Contacts />}
      </div>
      {WidthScreen().width < 500 && <Contacts />}
    </header>
  )
}

export default Header