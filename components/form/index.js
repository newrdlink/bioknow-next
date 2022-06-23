import styles from './style.module.scss'
import InputMask from "react-input-mask"
import { MButton, InputBackForm } from 'components'
import { inputs } from 'constants/inputs'
import { info } from 'constants/formData'
import { useState } from 'react'
import api from 'utils/ApiMail'

const Form = () => {

  const [data, setData] = useState({ phone: '' })
  const [isFormValid, setIsFormValid] = useState({ name: false, text: false, phone: false })
  const [isReq, setIsReq] = useState(false)
  const [isResOk, setIsResOk] = useState('')

  const onSubmit = (evt) => {
    evt.preventDefault()
    setIsReq(true)

    api.postEmail(data)
      .then((res) => {
        const { data: { attributes: { phone } } } = res
        setIsReq(false)
        setIsResOk(info.reqOk + phone)
      })
      .catch(() => {
        setIsReq(false)
        setIsResOk(info.errorReq)
      })
  }

  const checkValidForm = () => {
    const arr = Object.entries(isFormValid)
    let result = arr.some(el => el[1] === false)
    return result
  }

  const onChange = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value })
    setIsFormValid({ ...isFormValid, [evt.target.name]: evt.currentTarget.validity.valid })

    if (evt.target.name === 'phone') {
      let count = 0
      const arr = evt.target.value.split('')
      arr.forEach(el => el === ' ' ? count++ : null)

      if (count === 1) {
        setIsFormValid({ ...isFormValid, [evt.target.name]: true })
      } else { setIsFormValid({ ...isFormValid, [evt.target.name]: false }) }
    }
    checkValidForm()
  }

  return (
    <form className={styles.form}>
      {inputs.map(el =>
        <InputBackForm
          key={el.name} {...el}
          onChangeUp={(evt) => onChange(evt)}
          isActive={data[el.name]?.length > 0}
          value={data[el.name] || ''}
        />)}
      <label className={styles.form__label}>
        <InputMask
          name="phone"
          className={styles.form__input}
          value={data['phone'] || ''}
          onChange={(evt) => onChange(evt)}
          mask="+7\(999) 999-9999"
          maskChar=" "
        />
        {data['phone']?.length === 0 && <span className={styles.form__span}>{info.labelPhone}</span>}
      </label>
      <p className={styles.form__error}>{isResOk}</p>
      <MButton
        name="отправить"
        place="contact"
        // whileHover={{ scale: .8 }}
        type="submit"
        onClick={onSubmit}
        blocked={isReq || checkValidForm()}
      />
    </form>
  )
}

export default Form