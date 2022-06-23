import styles from './style.module.scss'
import cn from 'classnames'
import { useState } from 'react'

const InputBackForm = ({ type, name, label, minLength, maxLength, required, onChangeUp, isActive }) => {

  const [isValid, setIsValid] = useState(true)

  const onChange = (evt) => {
    onChangeUp(evt)
    setIsValid(evt.currentTarget.validity.valid)
    if (evt.target.value.length === 0) setIsValid(true)
  }

  return (
    <label className={styles.label}>
      <input
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        className={styles.input}
        onChange={(evt) => onChange(evt)}
      />
      <span
        className={cn(styles.span,
          { [styles.span_active]: isActive },
          { [styles.span_error]: !isValid },
        )}
      >{label}</span>
    </label>
  )
}

export default InputBackForm