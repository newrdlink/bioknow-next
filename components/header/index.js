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
        <Contacts />
      </div>

    </header>
  )
}

export default Header