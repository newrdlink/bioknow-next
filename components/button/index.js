import styles from './style.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Button = forwardRef(({ name, place, onClick, type }, ref) => (
  <motion.button
    ref={ref}
    type={type}
    onClick={onClick}
    place={place}
    className={cn(styles.button, styles[place])}
  >{name}</motion.button>
))

export const MButton = motion(Button)
