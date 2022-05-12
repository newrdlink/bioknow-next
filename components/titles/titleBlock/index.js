import styles from './style.module.scss'
import cn from 'classnames'

const TitleBlock = ({ title, place }) =>
  <h3 className={cn(styles.title, styles[place])}>
    {title}
  </h3>

export default TitleBlock


// export const TitleItemCard = ({ title, place }) =>
//   <h5 className={cn(styles.title, styles[place])}>
//     {title}
//   </h5>
