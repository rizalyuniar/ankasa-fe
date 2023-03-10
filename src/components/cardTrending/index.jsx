import style from './trending.module.css';

import React from 'react';

const CardTrending = (props) => {
  return (
    <div className={style.wrapperCardTrending}>
      <div className={style.wrapperImg}>
        <img src={props.image} alt="" className={style.image} />
        <p className={style.titleCount}>
          <span className={style.count}>{props.count}</span> Airlines
        </p>
      </div>
      <p className={`mb-0 ${style.subcity}`}>{props.city},</p>
      <div className={style.wrapperNation}>
        <span className={style.city}>{props.nation}</span>
        <button className={style.more}>
          <i className={`bi bi-chevron-right ${style.iconArrow}`} />
        </button>
      </div>
    </div>
  );
};

export default CardTrending;
