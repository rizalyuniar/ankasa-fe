// import style from './admin.module.css';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar';
import '../../../assets/css/sb-admin-2.min.css';
import '../../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../../assets/vendor/datatables/dataTables.bootstrap4.min.css';
import Topbar from '../../../components/Admin/Topbar';
import PageHeading from '../../../components/Admin/PageHeading';
import DashboardDetail from '../../../components/DashboardDetail';
import Footer from '../../../components/Admin/Footer';
import axios from 'axios';

const Admin = () => {
  const [fullname, setFullname] = useState('');
  const [airlines, setAirlines] = useState([]);
  const [flight, setFlight] = useState([]);
  const [city, setCity] = useState([]);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    setFullname(localStorage.getItem('fullname'));

    // get Airline
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/airline?limit=100`)
      .then((res) => {
        setAirlines(res.data.data);
      })
      .catch((err) => console.log(err));

    // get Flight
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/flight?limit=100`)
      .then((res) => {
        setFlight(res.data.data);
      })
      .catch((err) => console.log(err));

    // get city
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/city?limit=100`)
      .then((res) => {
        setCity(res.data.data);
      })
      .catch((err) => console.log(err));

    // get booking
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/booking?limit=100`)
      .then((res) => {
        setBooking(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            <div className="container-fluid px-4">
              <PageHeading title={`Welcome, ${fullname}`} />

              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <DashboardDetail title="Airlines" count={airlines.length} icon="bi bi-airplane" accsent="border-left-success" />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <DashboardDetail title="Flight Schedule" count={flight.length} icon="bi bi-calendar-day-fill" accsent="border-left-primary" />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <DashboardDetail title="City" count={city.length} icon="bi bi-map" accsent="border-left-primary" />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                  <DashboardDetail title="Booking" count={booking.length} icon="bi bi-cash-stack" accsent="border-left-primary" />
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </body>
  );
};

export default Admin;
