import styles from './style.module.scss'
import api from '../../utils/ApiTasks'
import ReactMarkdown from 'react-markdown'
import createdTime from 'helpers/createdTime'
import { HeadPage } from 'components'
// import Image from 'next/image'
const TaskPage = ({ taskData = { attributes: {} } }) => {

  const { attributes: data } = taskData
  // console.log(data)
  const { title, description, article, createdAt } = data
  // const { title = "temp", subtitle, article, mainImage = "https://api.bioknow.ru/uploads/zaglushka_86c456634d.jpg?updated_at=2022-07-02T18:08:57.736Z" } = data
  // const titlePage = title[0].toUpperCase() + title.slice(1).toLowerCase()
  return (
    <section className={styles.task}>
      <HeadPage
        title={title}
        description={description}
        keywords="Решение экзаменнационных заданий по биологии (ОГЭ, ЕГЭ)"
      />
      <h3 className={styles.task__title}>{title}</h3>
      <span className={styles.task__create}>{`Добавлено: ${createdTime(createdAt)}`}</span>
      <p className={styles.task__description}>{description}</p>
      <div className={styles.article__wrapper}>
        <ReactMarkdown>
          {article}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default TaskPage

export const getStaticPaths = async () => {
  const res = await api.getTasks()
  const { data: arr } = res

  const paths = arr.map(el => {
    return {
      params: { id: el.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await api.getTask(params.id)
  return { props: { taskData: res.data } }
}