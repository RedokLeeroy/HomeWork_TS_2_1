import React from "react"
import s from "./Input.module.css"

interface IProp {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
}

export const FindByName = ({value, onChange}: IProp): JSX.Element => {
    return <label className={s.label}> Find Contacts By name: <input className={s.input}
  name="filter"
  value={value}
  onChange={onChange}
/>
</label>
}