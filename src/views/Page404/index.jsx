import React from 'react';
import style from './notfound.module.css';
import img from '../../assets/404.png';
const Page404 = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          <img src={img} alt="" className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default Page404;
