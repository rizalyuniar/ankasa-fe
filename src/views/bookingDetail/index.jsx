import React, { useState, useEffect } from 'react';
import './booking-detail.css';
import Navbar from '../../components/navbar/index';
import qr from '../../assets/QRCode1.svg';
import Footer from '../../components/footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
moment.locale('id');

const BookingDetail = () => {
  // get booking detail
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/passenger/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container-fluid container-fluid-booking-detail">
        <div className="container container-booking-detail">
          <div className="ticket-flight">
            <div className="row">
              <div className="col-auto">
                <h4 className="fw-bold">Booking Pass</h4>
              </div>
              <div className="col-auto titik-tiga">
                <img src={require('../../assets/Ellipse 5.png')} />
                <img src={require('../../assets/Ellipse 5.png')} />
                <img src={require('../../assets/Ellipse 5.png')} />
              </div>
            </div>
            <div className="mt-3 container ticket-flight-main">
              <div className="row">
                <div className="col-md-9 ticket-flight-main-left-border">
                  {detail.map((row) => (
                    <div className="ticket-flight-main-left">
                      <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between">
                          <div className="col-4">
                            <img src={row.image} width={200} style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <div className="col-auto">
                              <h3>
                                <b>{row.city_departure_code}</b>
                              </h3>
                            </div>
                            <div className="col-auto">
                              <img src={require('../../assets/Vector2.png')} />
                            </div>
                            <div className="col-auto">
                              <h3>
                                <b>{row.city_destination_code}</b>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 row">
                        <div className="col-12 d-flex align-items-center">
                          <div className="col-4">
                            <span className="text-secondary">Fullname</span>
                            <h6 className="text-secondary fw-bolder mt-2">{row.fullname}</h6>
                          </div>
                          <div className="col-8">
                            <span className="text-secondary">Class</span>
                            <h6 className="text-secondary fw-bolder mt-2">
                              {row.flight_class == 1 ? (
                                <div>
                                  <span>Economy</span>
                                </div>
                              ) : row.flight_class == 2 ? (
                                <div>
                                  <span>Bussines</span>
                                </div>
                              ) : row.flight_class == 3 ? (
                                <div>
                                  <span>Firs Class</span>
                                </div>
                              ) : (
                                ''
                              )}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-12 d-flex align-items-center">
                          <div className="col-4">
                            <span className="text-secondary">Code</span>
                            <h6 className="text-secondary fw-bolder mt-2">{row.code}</h6>
                          </div>
                          <div className="col-8">
                            <span className="text-secondary">Terminal</span>
                            <h6 className="text-secondary fw-bolder mt-2">{row.terminal}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-12 d-flex align-items-center">
                          <div className="col-4">
                            <span className="text-secondary">Gate</span>
                            <h6 className="text-secondary fw-bolder mt-2">{row.gate}</h6>
                          </div>
                          <div className="col-8">
                            <span className="text-secondary">Departure</span>
                            <h6 className="text-secondary fw-bolder mt-2">
                              {moment(row.date_departure).format('DD-MMMM-YYYY')} - {row.time_departure}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-3 ticket-flight-main-right-border">
                  <div className="ticket-flight-main-right text-center">
                    <img src={qr} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingDetail;
