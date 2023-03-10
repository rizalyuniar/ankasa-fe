import React from 'react';
import style from './form.module.css';

const FormInputProfile = (props) => {
  return (
    <div className="my-3">
      <label htmlFor={props.label} className={`form-label ${style.formLabel}`}>
        {props.children}
      </label>
      <input type={props.type} className={`form-control mb-4 ${style.formInput}`} id={props.label} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.change} />
    </div>
  );
};

export default FormInputProfile;
