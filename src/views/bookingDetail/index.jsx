import React from "react";
import "./booking-detail.css";
import Navbar from "../../components/navbar/index";
import qr from "../../assets/QRCode1.svg";

const BookingDetail = () => {
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
                <img src={require("../../assets/Ellipse 5.png")} />
                <img src={require("../../assets/Ellipse 5.png")} />
                <img src={require("../../assets/Ellipse 5.png")} />
              </div>
            </div>
            <div className="mt-3 container ticket-flight-main">
              <div className="row">
                <div className="col-md-9 ticket-flight-main-left-border">
                  <div className="ticket-flight-main-left">
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src={require("../../assets/airline.png")}
                          width={100}
                          height={50}
                        />
                      </div>
                      <div className="pt-3 col-auto">
                        <h3>
                          <b>IDN</b>
                        </h3>
                      </div>
                      <div className="pt-3 col-auto">
                        <img src={require("../../assets/Vector2.png")} />
                      </div>
                      <div className="pt-3 col-auto">
                        <h3>
                          <b>JPN</b>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Code</span>
                        <h6 className="text-secondary">AB-221</h6>
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">Class</span>
                        <h6 className="text-secondary">Premium</h6>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Terminal</span>
                        <h6 className="text-secondary">A</h6>
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">Gate</span>
                        <h6 className="text-secondary">2B</h6>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Departure</span>
                        <h6 className="text-secondary">
                          Monday, 20 July ‘20 - 12:33
                        </h6>
                      </div>
                    </div>
                  </div>
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
    </section>
  );
};

export default BookingDetail;
