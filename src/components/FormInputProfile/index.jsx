import React from 'react';
import style from './form.module.css';

const FormInputProfile = (props) => {
  return (
    <div className="my-3">
      <label htmlFor={props.label} className={`form-label ${style.formLabel}`}>
        Email
      </label>
      <input type={props.type} className={`form-control ${style.formInput}`} id={props.label} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInputProfile;
