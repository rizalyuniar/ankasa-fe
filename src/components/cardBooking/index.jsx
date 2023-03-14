import style from './cardBooking.module.css';
import React, { useState } from 'react';
import icon from '../../assets/Vector2.png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const CardBooking = (props) => {
  const navigate = useNavigate();

  const [cancel, setCancel] = useState({
    status: 4,
  });
  const [payment, setPayment] = useState({
    status: 2,
  });

  const handleStatusCancel = (id) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/status/${id}`, cancel, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(`success`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleStatusPayment = (id) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/status/${id}`, payment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(`success`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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

          {props.status == 1 ? (
            <p className={style.statusWaiting}>Waiting Payment</p>
          ) : props.status == 2 ? (
            <p className={style.statusApprove}>E-Ticket Issued</p>
          ) : props.status == 3 ? (
            <p className={style.statusPending}>Reject</p>
          ) : props.status == 4 ? (
            <p className={style.statusCancel}>Cancel</p>
          ) : props.status == 5 ? (
            <p className={style.statusRefund}>Refund</p>
          ) : (
            <p className={style.statusPending}>Expired</p>
          )}
        </div>

        <div className={style.wrapperButton}>
          <button type="button" className={style.refund} onClick={() => handleStatusPayment(props.id)}>
            Payment
          </button>
          <button type="button" className={style.cancel} onClick={() => handleStatusCancel(props.id)}>
            Cancel
          </button>
        </div>
      </div>

      <button type="button" className={`mt-4 ${style.buttonDetail}`} onClick={() => navigate(`/booking/user`)}>
        View Detail
      </button>
    </div>
  );
};

export default CardBooking;
