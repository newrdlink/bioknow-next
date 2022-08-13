import styles from './style.module.scss'
import { motion } from "framer-motion"
import Link from 'next/link'

const MobMenuItem = ({ i, name, path, handleClick }) => {

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#3900FF"];
  const style = { border: `2px solid ${colors[i]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.mobMenuItem}
    >
      {/* <div className={styles.mobMenuItem__icon} style={style} >{i}</div> */}
      {/* <p>gkrhgihrep</p>
      <p>gkrhgihrep</p> */}
      <div className={styles.mobMenuItem__text}
        style={style}
        onClick={handleClick}>
        <Link href={path}><a className={styles.mobMenuItem__link}>{name}</a></Link>
      </div>
    </motion.li>
  )
}

export default MobMenuItem