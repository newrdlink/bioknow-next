import styles from './style.module.scss'
import { Logo } from 'components'

const Footer = () => {
  // console.log(router.asPath)
  return (
    <footer className={styles.footer}>
      <div>
        <Logo />
      </div>
      <p className={styles.footer__copyright}>&#169; <span>{new Date().getFullYear()}</span>, bioknow</p>
    </footer>
  )
}

export default Footer