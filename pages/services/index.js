import styles from './style.module.scss'
import { HeadPage, titles, ServiceItem } from 'components'
import api from 'utils/ApiServices'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { metaInfo } from 'constants/metaInfo'

const Services = ({ services }) => {
  const router = useRouter()
  const { query: { id: queryId } = {} } = router

  useEffect(() => {
    if (queryId) {
      const el = document.getElementById(queryId.toString())
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
  }, [queryId])

  return (
    <div className={styles.services}>
      <HeadPage {...metaInfo.find(el => el.page === 'services')} />
      <section>
        <titles.TitleBlock
          title="Услуги"
          place="services"
        />
        {services.map((el) => <ServiceItem key={el.id} {...el} id={el.id} />)}
      </section>
    </div>

  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await api.getServices()

  return { props: { services: res.data } }
}

export default Services