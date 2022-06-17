import styles from './style.module.scss'
import Link from 'next/link'
import { aboutInfo } from "constants/about"
import { titles, HeadPage, NavAbout } from 'components'
import { metaInfo } from 'constants/metaInfo'
import { WidthScreen } from 'utils/widthScreen'

const About = () => {

  const arr = aboutInfo.subtitle.split('    ')

  return (
    <section className={styles.about}>
      <HeadPage {...metaInfo.find(el => el.page === 'about')} />
      <titles.TitleBlock
        title={aboutInfo.title}
        place="about"
      />
      {arr.map((el) => <p className={styles.about__subtitle} key={el}>{el}</p>)}
      {WidthScreen().width < 450 && <NavAbout />}
    </section>
  )
}

export default About