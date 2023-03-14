import style from './carousel.module.css';
import React from 'react';

const CardCarousel = (props) => {
  console.log(props);
  return (
    <div className={style.wrapperCardCarousel}>
      <div className={style.wrapperImgCarousel}>
        <img src={props.image} alt="img" className={style.imgCarousel} />
      </div>
      <p className={style.titleDestiCarousel}>{props.title}</p>
    </div>
  );
};

export default CardCarousel;
