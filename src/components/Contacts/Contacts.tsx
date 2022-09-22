import s from './Contacts.module.css';
import React from 'react';

import { Item } from './Item';
export const Contacts = ({
  contact,
  onDelete,
}: {
  contact: { id: string; name: string; phone: string }[];
  onDelete: (id: string) => void;
}): JSX.Element => {
  return (
    <ul className={s.list}>
      {contact.map(({ id, name, phone }) => (
        <Item key={id} name={name} phone={phone} onDelete={onDelete} id={id} />
      ))}
    </ul>
  );
};
