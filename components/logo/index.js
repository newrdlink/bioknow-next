import { motion } from "framer-motion"
import styles from './style.module.scss'
import Image from 'next/image'
import logo from '../../images/logo2.svg'
import { useRouter } from 'next/router'

const Logo = () => {

  const history = useRouter()

  return (
    <motion.div
      // onHoverStart={() => console.log('hover start')}
      // onHoverStart={{ x: 10 }}
      // whileHover={{ x: 20 }}
      // animate={{ x: 23 }}
      // transition={{ duration: 2, delay: 2 }}
      // whileHover={{ scale: 1.2 }}
      className={styles.logo} onClick={() => history.push('/')}>
      <Image
        src={logo}
        alt="Логотип"
        className={styles.logo__image}
        width={200}
      />
    </motion.div>
  )
}

export default Logo