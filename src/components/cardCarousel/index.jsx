import style from './carousel.module.css';
import accsent2 from '../../assets/agra.jpg';
import React from 'react';

const CardCarousel = () => {
  return (
    <div className={style.wrapperCardCarousel}>
      <div className={style.wrapperImgCarousel}>
        <img src={accsent2} alt="" className={style.imgCarousel} />
      </div>
      <p className={style.titleDestiCarousel}>Paris</p>
    </div>
  );
};

export default CardCarousel;
