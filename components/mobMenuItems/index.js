import styles from './style.module.scss'
import { motion } from "framer-motion"
import { MobMenuItem } from 'components'
import { items } from 'constants/nav'


const MobMenuItems = ({ handleClick }) => {



  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <motion.ul variants={variants} className={styles.mobMenuItems}>
      {items.map((el, index) => (
        <MobMenuItem i={index} key={el.name} name={el.name} path={el.path} handleClick={handleClick} />
      ))}
    </motion.ul>
  )
}

export default MobMenuItems