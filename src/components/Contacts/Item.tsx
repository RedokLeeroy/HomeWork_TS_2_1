    import s from "./Button.module.css"
    import i from "./Item.module.css"
    import React from "react"

    interface IProp {
        name: string,
        phone: string,
        onDelete: (id: string) =>void,
        id: string
    }

export const Item = ({name, phone, onDelete, id }: IProp): JSX.Element => {return <li className={i.item}>
    <p className={i.P}>{name} : {phone}</p>
    <button className={s.button} onClick={()=>onDelete(id)}>delete</button>
 </li>}  


