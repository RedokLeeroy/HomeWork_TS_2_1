import React from 'react';
import s from './Input.module.css';

interface IProp {
  name: string;
  value: string;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameInput = ({ name, value, func }: IProp) => {
  return (
    <label className={s.label}>
      Name
      <input
        className={s.input}
        type="text"
        name={name}
        value={value}
        onChange={func}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
