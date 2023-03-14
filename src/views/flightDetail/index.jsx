import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import garuda from "../../assets/airline.png";
import icFlight from "../../assets/flight.svg";
import ceklis from "../../assets/icCentang.svg";
import bnr from "../../assets/pesawat.svg";
import icWarning from "../../assets/warning.svg";
import icDot from "../../assets/icDot.svg";
import icDown from "../../assets/btnback.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

const FlightDetail = () => {
  // const [data, setData] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/flight/${id}`)
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);
  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <div className={`${styles.benner} col-12`}>
            <img className={styles.bnr} src={bnr} alt="" />
            <h2 className={styles.textPerson}>Contact Person Details</h2>
            <h3 className={styles.fd}>Flight Detail</h3>
            <h4 className={styles.vd}>View Detail</h4>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className={`col-md-8 p-4 ${styles.leftside}`}>
              <div className={`p-4 ${styles.CPdetail}`}>
                <div className="d-flex flex-column">
                  <p className={styles.textLabelCP}>Full Name</p>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      // value={data.fullname}
                    />
                  </div>
                  <p className={styles.textLabelCP}>Email</p>
                  <div className="input-group mb-4">
                    <input
                      type="email"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      // value={data.email}
                    />
                  </div>
                  <p className={styles.textLabelCP}>Phone Number</p>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="Phone"
                      aria-label="Phone"
                      aria-describedby="basic-addon1"
                      // value={data.phone_number}
                    />
                  </div>
                  <div
                    className={`d-flex flex-row p-3 mt-3 ${styles.reminder}`}
                  >
                    <img src={icWarning} alt="warning" />
                    <div className="ms-3">
                      Make sure the customer data is correct.
                    </div>
                  </div>
                </div>
              </div>
              <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>
              <div className={`p-4 ${styles.passengerDetail}`}>
                <div
                  className={`d-flex flex-row p-3 mb-4 ${styles.reminderPassenger}`}
                >
                  <div className={styles.textPassenger}>
                    Passenger : 1 Adult
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <p className={styles.textLabelCP}>Title</p>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="Mr"
                      aria-label="Mr"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <p className={styles.textLabelCP}>Full Name</p>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="FullName"
                      aria-label="FullName"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <p className={styles.textLabelCP}>Nationallity</p>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.inputStyle}`}
                      placeholder="Nationallity"
                      aria-label="Nationallity"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>
              <div className={`p-4 ${styles.passengerDetail}`}>
                <div className="d-flex flex-row">
                  <input
                    class="form-check-input mt-1 me-3"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <p className={styles.textInsurance}>Travel Insurance</p>
                  <p className={`ms-auto ${styles.textPriceinsurance}`}>
                    {/* $ {data.price} */}
                  </p>
                  <p className={`mt-1 ${styles.textPax}`}>/pax</p>
                </div>
                <hr />
                <p className={styles.textCompensation}>
                  Get travel compensation up to $ 10.000,00
                </p>
              </div>
              <div class="d-grid gap-2 col-6 mt-5 mx-auto">
                <button class={`btn ${styles.cstmButton}`} type="button">
                  Proceed to Payment
                </button>
              </div>
            </div>
            <div className={`col-md-4 p-4 ${styles.rightside}`}>
              <div className="d-flex flex-row ">
                <img src={garuda} alt="garuda" />
                <p className={`ms-5 ${styles.textGaruda}`}>Garuda Indonesia</p>
              </div>
              <div className="d-flex flex-row mt-4">
                <div className={styles.textCity}>Medan (IDN)</div>
                <img src={icFlight} alt="flight" className="mx-4" />
                <div className={styles.textCity}>Tokyo (JPN)</div>
              </div>
              <div className="d-flex flex-row mt-4">
                <div className={styles.textTime}>Sunday, 15 August 2020</div>
                <img src={icDot} alt="dot" className="mx-3" />
                <div className={styles.textTime}>12:33 - 15:21</div>
              </div>
              <div className="d-flex flex-row mt-4">
                <img src={ceklis} alt="dot" className="mx-3" />
                <div className={styles.textOptional}>Refundable</div>
              </div>
              <div className="d-flex flex-row mt-3">
                <img src={ceklis} alt="dot" className="mx-3" />
                <div className={styles.textOptional}>Refundable</div>
              </div>
              <hr />
              <div className="d-flex flex-row mt-3">
                <div className={styles.textTotal}>Total Payment</div>
                <div className={`ms-auto me-3 ${styles.textPrice}`}>
                  $ 145,00
                </div>
                <img src={icDown} alt="down" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlightDetail;
