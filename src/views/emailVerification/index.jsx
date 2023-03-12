import style from './verif.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imgVerif from '../../assets/verif.png';

const VerifEmail = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <div className={style.accsentColor} />
      <div className="container">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          <div className={`col-md-8 text-center ${style.wrapperCol}`}>
            <h1 className={style.titleHeader}>Welcome to Ankasa</h1>
            <img src={imgVerif} alt="" className={style.image} />
            <p className={style.subtitle}>Thanks for confirm your Accout. Get Started for the experience with us!</p>
            <Link className={style.buttonConfirm} to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifEmail;
