import styles from './style.module.scss'
import { aboutInfo } from "constants/about"
import { titles } from 'components'

const About = () => {

  const arr = aboutInfo.subtitle.split('    ')
  console.log(arr)



  return (
    <section className={styles.about}>
      <titles.TitleBlock
        title={aboutInfo.title}
        place="about"
      />
      {arr.map((el) => <p className={styles.about__subtitle} key={el}>{el}</p>)}

    </section>
  )
}

export default About