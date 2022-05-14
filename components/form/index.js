import styles from './style.module.scss'
import { MButton } from '/components'

const Form = () => {

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log('submit')
  }

  return (
    <form className={styles.form}>
      <label>
        <input className={styles.form__input} />
      </label>
      <label>
        <input className={styles.form__input} />
      </label>
      <select className={styles.form__select} defaultValue="fjweko">
        <option className={styles.form__option}>Выбирете, пожалуйста, тему...</option>
        <option className={styles.form__option}>Подготовка к ОГЭ</option>
        <option className={styles.form__option}>Подготовка к ЕГЭ</option>
        <option className={styles.form__option}>Индивидуальные занятия</option>
        <option className={styles.form__option}>Груповые занатия</option>
      </select>
      <MButton
        name="отправить"
        place="contact"
        whileHover={{ scale: .8 }}
        type="submit"
        onClick={onSubmit}
      />
    </form>
  )
}

export default Form