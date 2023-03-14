import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import style from './payment.module.css';

const AdminPayment = () => {
  const [booking, setBooking] = useState([]);
  const [reject, setReject] = useState({
    status: 3,
  });
  const [approve, setApprove] = useState({
    status: 2,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/booking`)
      .then((res) => {
        setBooking(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStatusReject = (id) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/status/${id}`, reject, {
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

  const handleStatusApprove = (id) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/status/${id}`, approve, {
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
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            <div className="container-fluid px-4">
              <PageHeading title="Payment" />

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Username
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Booking Id
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Airline Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Destination
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Time
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Status Payment
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {booking.map((data) => (
                    <tr>
                      <td className="align-middle text-center py-3">{data.fullname}</td>
                      <td className="align-middle">{data.id}</td>
                      <td className="align-middle text-center">{data.airline}</td>

                      <td className="align-middle text-center">
                        {data.city_departure_code} - {data.city_destination_code}
                      </td>
                      <td className="align-middle text-center">
                        {data.time_departure} - {data.arrival}
                      </td>
                      <td className="align-middle text-center">
                        {data.status == 1 ? (
                          <p className={style.statusWaiting}>Waiting Payment</p>
                        ) : data.status == 2 ? (
                          <p className={style.statusApprove}>E-Ticket Issued</p>
                        ) : data.status == 3 ? (
                          <p className={style.statusPending}>Reject</p>
                        ) : data.status == 4 ? (
                          <p className={style.statusCancel}>Cancel</p>
                        ) : data.status == 5 ? (
                          <p className={style.statusRefund}>Refund</p>
                        ) : (
                          <p className={style.statusPending}>Expired</p>
                        )}
                      </td>

                      <td className="align-middle text-center">
                        <button type="button" className="btn btn-success btn-sm me-2" onClick={() => handleStatusApprove(data.id)}>
                          <i className="bi bi-check2" />
                        </button>

                        <button className="btn btn-danger btn-sm" onClick={() => handleStatusReject(data.id)}>
                          <i className="bi bi-x-circle" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default AdminPayment;
