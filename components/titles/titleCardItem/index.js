import styles from './style.module.scss'
import cn from 'classnames'

const TitleCardItem = ({ title, place }) =>
  <h5 className={cn(styles.title, styles[place])}>{title}</h5>

export default TitleCardItem