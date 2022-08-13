import styles from './style.module.scss'
import { titles } from 'components'
import api from 'utils/ApiTasks'
import { ArticleItem, HeadPage } from 'components'
import { metaInfo } from 'constants/metaInfo'

const Tasks = ({ tasks = [] }) => {

  return (
    <section className={styles.tasks}>
      <HeadPage {...metaInfo.find(el => el.page === 'tasks')} />
      <titles.TitleBlock
        title="Экзаменнационные тестовые задания (ОГЭ, ЕГЭ). Разбор"
        place="tasks"
      />
      <ul className={styles.tasks__list}>
        {tasks.map(el => <ArticleItem key={el.id} {...el} place="tasks" />)}
      </ul>
    </section>
  )
}

export async function getServerSideProps() {

  const res = await api.getTasks()

  return { props: { tasks: res.data } }
}

export default Tasks