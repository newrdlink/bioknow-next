import styles from './style.module.scss'
import { items } from 'constants/navAbout'
import { NavItem } from 'components'

const NavAbout = () => {

  return (
    <nav>
      <ul className={styles.navAbout}>
        {
          items.map(el =>
            <NavItem
              key={el.path}
              path={el.path}
              name={el.name}
            />)
        }
      </ul>
    </nav>
  )
}

export default NavAbout