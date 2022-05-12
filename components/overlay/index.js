import styles from './style.module.scss'
import Image from 'next/image'
import mainImage from '../../images/mainImage.jpg'

const Overlay = () => {

  return (
    <section className={styles.overlay}>
      <Image src={mainImage} alt="Главная фотография" className={styles.overlay__image} />
    </section>
  )
}

export default Overlay