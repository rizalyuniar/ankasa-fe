import React, { useState, useEffect } from 'react';
import './booking-detail.css';
import Navbar from '../../components/navbar/index';
import qr from '../../assets/QRCode1.svg';
import Footer from '../../components/footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookingDetail = () => {
  // get booking detail
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/booking/${id}`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetail();
      setDetail(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container-fluid container-fluid-booking-detail">
        <div className="container container-booking-detail">
          <div className="ticket-flight">
            <div className="row">
              <div className="col-auto">
                <h4>Booking Pass</h4>
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
                        <div className="col-auto">
                          <img src={row.image} width={100} height={50} />
                        </div>
                        <div className="pt-3 col-auto">
                          <h3>
                            <b>{row.city_departure_code}</b>
                          </h3>
                        </div>
                        <div className="pt-3 col-auto">
                          <img src={require('../../assets/Vector2.png')} />
                        </div>
                        <div className="pt-3 col-auto">
                          <h3>
                            <b>{row.city_destination_code}</b>
                          </h3>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Code</span>
                          <h6 className="text-secondary">{row.code}</h6>
                        </div>
                        <div className="col-auto">
                          <span className="text-secondary">Class</span>
                          <h6 className="text-secondary">
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
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Terminal</span>
                          <h6 className="text-secondary">{row.terminal}</h6>
                        </div>
                        <div className="col-auto">
                          <span className="text-secondary">Gate</span>
                          <h6 className="text-secondary">{row.gate}</h6>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Departure</span>
                          <h6 className="text-secondary">{row.date_departure}</h6>
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
