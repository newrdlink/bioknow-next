import styles from './style.module.scss'
import { items } from '../../constants/nav'
import NavItem from '../navItem'

const Nav = () => {

  return (
    <nav>
      <ul className={styles.nav}>
        {
          items.map(el =>
            <NavItem
              key={el.name}
              name={el.name}
              path={el.path}
            />)
        }
      </ul>
    </nav>
  )
}

export default Nav