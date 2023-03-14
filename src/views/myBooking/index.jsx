import React from 'react';
import style from './style.module.css';
import Navbar from '../../components/navbar';
import ProfileCard from '../../components/profileCard';

import CardBooking from '../../components/cardBooking';
import Footer from '../../components/footer';

const myBooking = () => {
  // const { id } = useParams();

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

            <CardBooking approved={false} date="Monday, 20 July 2020 - 12:33" from="IDN" destination="JPN" airlines="Garuda Indonesia, AB-22" />

            <CardBooking approved={true} date="Monday, 20 July 2020 - 12:33" from="Jakarta" destination="Medan" airlines="Citilink, AB-22" />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default myBooking;
