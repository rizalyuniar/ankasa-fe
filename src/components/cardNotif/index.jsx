import style from './notif.module.css';

import React from 'react';

const CardNotif = (props) => {
  return (
    <div className={style.wrapperCard}>
      <p className={style.titleHeader}>{props.title}</p>
      <p className={style.message}>{props.message}t</p>

      <span className={style.time}>{`${props.time} Ago`}</span>
    </div>
  );
};

export default CardNotif;
