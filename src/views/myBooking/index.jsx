import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Navbar from '../../components/navbar';
import ProfileCard from '../../components/profileCard';
import CardBooking from '../../components/cardBooking';
import Footer from '../../components/footer';
import axios from 'axios';

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/booking/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMyBooking(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <body className={style.body}>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <ProfileCard />
          </div>

          <div className={`${style.col} col-lg-8 col-md-7`}>
            <div className={style.wrapperMain}>
              <span className={style.subHeader}>my booking</span>

              <div className={style.wrapperMyBooking}>
                <p className={style.titleHeader}>My Booking</p>
                <button className={style.orderHistory}>Order History</button>
              </div>
            </div>

            {!myBooking.length ? (
              <h3 className="fw-bold">You haven't bought a ticket yet</h3>
            ) : (
              myBooking.map((data) => (
                <CardBooking id={data.id} status={data.status} date={data.date_departure} time={data.time_departure} from={data.city_departure_code} destination={data.city_destination_code} airlines={`${data.name}, ${data.code}`} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default MyBooking;
