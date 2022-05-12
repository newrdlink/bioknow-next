import styles from './style.module.scss'
import cn from 'classnames'

const SubtitleBlock = ({ subtitle, place }) =>
  <p className={cn(styles.subtitle, styles[place])}>{subtitle}</p>

export default SubtitleBlock