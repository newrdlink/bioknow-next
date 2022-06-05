import styles from './style.module.scss'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const ProgramItem = ({ attributes }) => {

  const { title, caption, text, image } = attributes

  return (
    <li className={styles.programItem}>
      <h6 className={styles.programItem__title}>{title}</h6>
      <ReactMarkdown className={styles.programItem__text}>{text}</ReactMarkdown>
      <div className={styles.programItem__wrapper}>
        <Image src={image} alt={caption} width={720} height={540} />
        <p className={styles.programItem__caption}>{caption}</p>
      </div>

    </li>
  )
}

export default ProgramItem