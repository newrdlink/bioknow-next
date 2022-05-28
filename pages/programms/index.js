import styles from './style.module.scss'
import { HeadPage, titles } from 'components'
import { metaInfo } from 'constants/metaInfo'

const Programms = () => {
  return (
    <section>
      <HeadPage {...metaInfo.find(el => el.page === 'programms')} />
      <titles.TitleBlock
        title="Программы для подготовки"
        place="programms"
      />

    </section>
  )
}

export default Programms