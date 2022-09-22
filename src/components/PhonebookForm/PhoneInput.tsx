import s from "./Input.module.css"
import React from "react"

interface IProp {
  name: string,
  value: string,
  func: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PhoneInput = ({name, value ,func}: IProp) => {
    return <label className={s.label}>Phone<input className={s.input}
  type="tel"
  name={name}
  value={value}
  onChange={func}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>
}