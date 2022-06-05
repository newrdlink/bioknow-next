import styles from './style.module.scss'
import { HeadPage, titles, ProgramItem } from 'components'
import { metaInfo } from 'constants/metaInfo'
import api from 'utils/ApiProgramms'

const Programms = ({ programms }) => {

  return (
    <section className={styles.programms}>
      <HeadPage {...metaInfo.find(el => el.page === 'programms')} />
      <titles.TitleBlock
        title="Программы для подготовки"
        place="programms"
      />
      <ul className={styles.programms__items}>
        {
          programms.map((el) => <ProgramItem key={el.id} {...el} />)
        }
      </ul>

    </section>
  )
}

export async function getServerSideProps() {

  const res = await api.getProgramms()

  return { props: { programms: res.data } }
}

export default Programms