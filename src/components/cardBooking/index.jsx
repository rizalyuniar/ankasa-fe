import style from './cardBooking.module.css';
import React, { useState } from 'react';
import icon from '../../assets/Vector2.png';
const CardBooking = (props) => {
  let approve = false;
  approve = props.approved;

  return (
    <div className={style.wrapperMain}>
      <span className={style.date}>{props.date}</span>

      <div className={style.wrapperDestination}>
        <p className={style.titleDesination}>{props.from}</p>
        <img src={icon} alt="" className={style.iconAirlines} />
        <p className={style.titleDesination}>{props.destination}</p>
      </div>

      <span className={style.airlines}>{props.airlines}</span>

      <hr />

      <div className={style.wrapperFooter}>
        <div className={style.wrapperStatus}>
          <span className={style.titleStatus}>Status</span>
          {approve ? <p className={style.statusApprove}>E-Ticket Issued</p> : <p className={style.statusPending}>Waiting for Payment</p>}
        </div>
        <button className={style.detailFlight}>
          View Details
          <i className="bi bi-caret-down-fill ms-3"></i>
        </button>
      </div>
    </div>
  );
};

export default CardBooking;
