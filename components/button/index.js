import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Button = forwardRef(({ name, place, onClick, type }, ref) => (
  <motion.button
    ref={ref}
    type={type}
    onClick={onClick}
    place={place}
    className={styles.button}
    whileHover={{ scale: 1.2 }}
  >{name}</motion.button>
))

const MButton = motion(Button)

export default MButton