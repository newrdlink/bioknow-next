import styles from './style.module.scss'
import Image from 'next/image'
import mainImage from '../../images/mainImage.jpg'
import mainImageMob from '../../images/mainImageMob.jpg'
import { WidthScreen } from 'utils/widthScreen'

const Overlay = () => {

  return (
    <section className={styles.overlay}>
      <div className={styles.overlay__imageWrapper}>
      <Image 
        src={WidthScreen().width > 450 ? mainImage : mainImageMob} 
        alt="Главная фотография" 
        className={styles.overlay__image}
      />
      </div>
    </section>
  )
}

export default Overlay