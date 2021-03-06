import Link from 'next/link'
import styles from './style.module.scss'
import { useRouter } from 'next/dist/client/router'
import cn from 'classnames'

const NavItem = ({ name, path }) => {
  const router = useRouter()
  // console.log(1, router.pathname)
  const isMainPage = router.pathname === '/'
  //console.log(isMaiPage)
  // console.log(2, path)
  // console.log(22, router.asPath)
  // console.log(3, router.pathname === path)

  return (
    <li className={cn(styles.navItem,
      { [styles.navItem_place_noMain]: !isMainPage }
    )}>
      <Link href={path}>
        <a
          className={cn(styles.navItem__link,
            { [styles.navItem__link_active]: router.pathname === path })}>
          {name.toUpperCase()}
        </a>
      </Link>
    </li >
  )
}

export default NavItem