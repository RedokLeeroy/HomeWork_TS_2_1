import PropTypes from 'prop-types';
import s from './Button.module.css';
import React from 'react';

export const FormSubmit = ({ title }: {title:string}): JSX.Element => {
  return (
    <button className={s.button} type="submit">
      {title}
    </button>
  );
};

FormSubmit.propTypes = {
  title: PropTypes.string.isRequired,
};
