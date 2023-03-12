import React from "react";
import style from "./footer.module.css";
import imgVector1 from "../../assets/vector 02.png";
import imgVector2 from "../../assets/apple-app-store-travel-awards-globestamp-7 2.png";
import imgVector3 from "../../assets/apple-app-store-travel-awards-globestamp-7 3.png";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div
          className={`container-fluid bg-white p-4 ${style.mobileOuterFooter}`}
        >
          <div className={`row p-5 ${style.mobileInnerFooter}`}>
            <div className="col-md-3">
              <h4 className="">
                <img src={imgVector1} width="30" alt="" />
                Ankasa
              </h4>
              <p className="mt-3 ms-3 text-muted">
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="ms-4">Features</h5>
              <ul className={`${style.listStyle}`}>
                <li className="py-1">
                  <a href={"/#"}>Find Ticket</a>
                </li>
                <li className="py-1">
                  <a href={"/#"}>My Booking</a>
                </li>
                <li className="py-1">
                  <a href={"/#"}>Chat</a>
                </li>
                <li className="py-1">
                  <a href={"/#"}>Notification</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-2">Download Angkasa App</h5>
              <ul className={`${style.listStyle}`}>
                <a href={"/#"} className={`${style.imgFooter}`}>
                  <img src={imgVector2} alt="" className="mb-3" />
                </a>
                <a href={"/#"} className={`${style.imgFooter}`}>
                  <img src={imgVector3} alt="" />
                </a>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-4">Follow Us</h5>
              <ul className={`${style.imgFooter} d-flex flex-row`}>
                <li className="pe-2">
                  <a href={"/#"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href={"/#"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${style.footerDown} px-5`}>
            <div className="container">
              <div className="row text-muted">
                <div className="col-12 col-md-6">
                  <p>© 2023 Company, Inc. All rights reserved.</p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="text-end mx-5">
                    <i className="fa fa-map-marker"></i>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
