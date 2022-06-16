import styles from './style.module.scss'
import { Contacts, Nav, Logo } from '/components'
import { WidthScreen } from 'utils/widthScreen'


const Header = () => {
  // console.log(WidthScreen())

  // console.log(WidthScreen().width> 450)
  return (
      <header className={styles.header}>
        <Logo />
        { WidthScreen().width > 450 && <Nav /> }
        <Contacts />
      </header>
  )
}

export default Header