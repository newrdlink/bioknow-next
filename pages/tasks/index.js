import styles from './style.module.scss'
import { titles } from 'components'
import api from 'utils/ApiTasks'
import Link from 'next/link'
import { ArticleItem } from 'components'

const Tasks = ({ tasks = [] }) => {

  // console.log(tasks)
  return (
    <section className={styles.tasks}>
      {/* <HeadPage {...metaInfo.find(el => el.page === 'articles')} /> */}
      <titles.TitleBlock
        title="Экзаменнационные тестовые задания (ОГЭ, ЕГЭ). Разбор"
        place="tasks"
      />
      <ul className={styles.tasks__list}>
        {/* {tasks.map(el => <Link key={el.id} href={`/tasks/${el.id}`}><a>{el.attributes.title}</a></Link>)} */}
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