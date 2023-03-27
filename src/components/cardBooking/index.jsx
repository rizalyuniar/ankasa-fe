import style from './cardBooking.module.css';
import React, { useEffect, useState } from 'react';
import icon from '../../assets/Vector2.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const CardBooking = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  const [cancel, setCancel] = useState({
    status: 4,
  });
  const [payment, setPayment] = useState({
    status: 2,
  });

  const [passanger, setPassanger] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/passenger/booking/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPassanger(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

  return (
    <div className={style.wrapperMain}>
      <span className={style.date}>
        {moment(props.date).format('DD-MMMM-YYYY')} - {props.time}
      </span>

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
          {/* <button type="button" className={style.refund} onClick={() => handleStatusPayment(props.id)}>
            Payment
          </button> */}
          {props.status == 3 || props.status == 4 ? (
            <button type="button" className={`${style.cancel} d-none`} onClick={() => handleStatusCancel(props.id)}>
              Cancel
            </button>
          ) : (
            <button type="button" className={style.cancel} onClick={() => handleStatusCancel(props.id)}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <div>
        <button className={`mt-4 ${style.buttonDetail}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          View Detail
        </button>
        <div className="collapse p-0" id="collapseExample">
          <div className={`${style.cardBody} p-0 card card-body`}>
            <ol className={`${style.orderList}`}>
              {passanger.map((data) => (
                <li>
                  <Link to={`/booking/${data.id}`} className={style.buttonPassangers}>
                    {data.fullname}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* <button type="button" className={`mt-4 ${style.buttonDetail}`} onClick={() => navigate(`/booking/${props.id}`)}>
        View Detail
      </button> */}
    </div>
  );
};

export default CardBooking;
