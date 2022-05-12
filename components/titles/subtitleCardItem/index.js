import styles from './style.module.scss'
import cn from 'classnames'

const SubtitleCardItem = ({ subtitle, place }) =>
  <p className={cn(styles.subtitle, styles[place])}>{subtitle}</p>

export default SubtitleCardItem