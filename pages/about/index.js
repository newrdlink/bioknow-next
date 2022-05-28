import styles from './style.module.scss'
import { aboutInfo } from "constants/about"
import { titles, HeadPage } from 'components'
import { metaInfo } from 'constants/metaInfo'

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

    </section>
  )
}

export default About