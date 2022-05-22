import styles from './style.module.scss'
import Image from 'next/image'

const ServiceItem = ({ id, attributes = {} }) => {
  const { title, subtitle, image, text } = attributes

  return (
    <section className={styles.serviceItem} id={id}>
      <div className={styles.serviceItem__content}>
        <div className={styles.serviceItem__info}>
          <h5 className={styles.serviceItem__title}>{title}</h5>
          <p className={styles.serviceItem__subtitle}>{subtitle}</p>
        </div>
        <div className={styles.serviceItem__wrapper}>
          <Image
            src={image}
            alt={`Фотография услуги ${title}`}
            width={500}
            height={357}
            className={styles.serviceItem__image}
          />
        </div>
      </div>
      <article className={styles.serviceItem__text}>{text}</article>
    </section>
  )
}

export default ServiceItem