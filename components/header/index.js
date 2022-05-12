import styles from './style.module.scss'
import { Contacts, Nav, Logo } from '/components'

const Header = () => {
  // console.log(SocialLinks)
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Nav />
        <Contacts />
      </header>
    </>

  )
}

export default Header