import React from "react";
import styles from "./style.module.css";
import AirlineGaruda from "../../assets/airline.png";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Option from "../../assets/iconOption.svg";
import Qrcode from "../../assets/QRCode1.svg";
import iconflight from "../../assets/flight.svg";

const BookingDetail = () => {
  return (
    <>
      <Navbar />
      <main className="bodycontent">
        <div className={`container-fluid ${styles.ticket}`}>
          <div className="row">
            <div className="col-md-10">
              <div className={styles.bookingPass}>
                <div className={`d-flex flex-row ${styles.title}`}>
                  <p className={`col-md-11 ${styles.settitle}`}>Booking Pass</p>
                  <img src={Option} />
                </div>
                <div className="d-flex flex-row">
                  <div className={`col-md-7 ${styles.ticketleft}`}>
                    <div className="d-flex flex-row">
                      <div className={`col-md-4 ${styles.iconAirline}`}>
                        <img src={AirlineGaruda} />
                      </div>
                      <div className="col-md-2 mt-3">
                        <h4>IDN</h4>
                      </div>
                      <div className="col-md-2 mt-3">
                        <img src={iconflight} className="ms-3" />
                      </div>
                      <div className="col-md-2 mt-3">
                        <h4>JPN</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-md-6 mt-5">
                        <p className={styles.code}>Code</p>
                        <p className={styles.setcode}>AB-221</p>
                      </div>
                      <div className="col-md-6 mt-5">
                        <p className={styles.class}>class</p>
                        <p className={styles.setclass}>Economy</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-md-6 mt-2">
                        <p className={styles.terminal}>Terminal</p>
                        <p className={styles.setterminal}>A</p>
                      </div>
                      <div className="col-md-6 mt-2">
                        <p className={styles.gate}>Gate</p>
                        <p className={styles.setgate}>221</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-md-8 mt-2">
                        <p className={styles.depature}>Depature</p>
                        <p className={styles.setdepature}>
                          Monday, 20 July ‘20 - 12:33
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`col-md-4 ${styles.ticketright}`}>
                    <img src={Qrcode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingDetail;
