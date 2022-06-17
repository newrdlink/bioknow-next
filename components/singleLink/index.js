import styles from './style.module.scss'
import Link from 'next/link'
import cn from 'classnames'

const SingleLink = ({ href, place, name }) => {

  return (
    <Link href={href}><a className={cn(styles.link, styles[place])}>{name}</a></Link>
  )
}

export default SingleLink