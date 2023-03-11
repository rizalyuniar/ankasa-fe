import React, { useState, useEffect } from "react";
import "./search-result.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import bnr from "../../assets/pesawat.svg";
import wifi from "../../assets/wifi.svg";

const SeacrhResult = () => {
  return (
    <section>
      <Navbar />
      <div className=" container-fluid-search-result">
        <div className="background-blue-search-result">
          <div className="row title-container-fluid-search-result">
            <div className="col-md-2">
              <img className="mt-5" src={bnr} />
            </div>
            <div className="col-md-8 search-container-fluid-search-result">
              <form>
                <div className="row">
                  <div className="col-auto icon-airplane">
                    <img className="" src={require("../../assets/aa.png")} />
                  </div>
                  <div className="col-auto input-from">
                    <div>
                      <span>From</span>
                    </div>
                    <div>
                      <input placeholder="Medan (IDN)" />
                    </div>
                    <div></div>
                  </div>
                  <div className="col-auto icon-switch">
                    <img
                      className=""
                      src={require("../../assets/vektorw.png")}
                    />
                  </div>
                  <div className="col-auto input-to">
                    <div>
                      <span>To</span>
                    </div>
                    <div>
                      <input placeholder="Tokyo (JPN)" />
                    </div>
                  </div>
                  <div className="mt-1 result-search">
                    <div className="row">
                      <div className="col-auto">
                        <p className="date">Monday, 20 July 20</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img src={require("../../assets/centang.png")} />
                      </div>
                      <div className="col-auto">
                        <p className="passenger">6 Passenger</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img src={require("../../assets/centang.png")} />
                      </div>
                      <div className="col-auto">
                        <p className="class">First Economy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2 bottom-container-fluid-search-result">
              <button>Change Search</button>
            </div>
          </div>
        </div>
        <div className="mt-4 container container-main-search-result">
          <div className="row">
            <div className="col-md-4 container-filter-search-result">
              <div className="title-filter-search-result">
                <div className="row">
                  <div className="col-auto">
                    <h5>
                      <b>Filter</b>
                    </h5>
                  </div>
                  <div className="col-auto">
                    <button
                      className="button-title-filter-search-result"
                      type="reset"
                      form="filter-form"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 form-filter-search-result">
                <form id="filter-form">
                  {/* FILTER AIRLINE */}
                  <div className="airline text-left">
                    <button
                      type="button"
                      className="mt-3 btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#select-airline"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Airline</b>
                        </div>
                        <div className="col-auto icon-collapse-airline">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="select-airline" className="collapse-airline show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Graruda Indonesia</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Air Asia</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Lion Air</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* FILTER TYPE */}
                  <div className="type text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-type"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Type</b>
                        </div>
                        <div className="col-auto icon-filter-type">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="filter-type" className="collapse-type show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Economy</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="filter-checkbox"
                            name=""
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Business</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>First Class</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* TRANSIT */}
                  <div className="transit text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-transit"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Transit</b>
                        </div>
                        <div className="col-auto icon-filter-transit">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="filter-transit" className="collapse-transit show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Direct</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Transit</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Trasit 2+</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* FACILITIES */}
                  <div className="facilities text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-facilities"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Facilities</b>
                        </div>
                        <div className="col-auto icon-filter-facilities">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div
                      id="filter-facilities"
                      className="collapse-facilities show"
                    >
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Luggage</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Lunch</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Wi-fi</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* SELECT TICKET */}

            <div className="col-md-8 container-select-ticket-search-result">
              <div className="title-select-ticket-search-result">
                <div className="row">
                  <div className="col-auto">
                    <h5>
                      <b>Select Filter</b>
                    </h5>
                  </div>
                  <div className="col-auto"></div>
                  <div className="col-auto sorting-title-select-ticket-search-result">
                    <div className="row">
                      <div className="dropdown dropdown-sorting">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="sorting"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <b>Sort order</b>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu"
                          aria-labelledby="sorting"
                        >
                          <li>
                            <a className="dropdown-item">asc</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TICKET */}

              <div className="mt-3 form-select-ticket-search-result">
                <div className="select-ticket-search-result">
                  <div className="row">
                    <div className="col-auto logo-airline">
                      <img src={require("../../assets/airline.png")} />
                    </div>
                    <div className="col-auto name-airplane-select-ticket">
                      <span className="text-secondary">Garuda Indonesia</span>
                    </div>
                  </div>
                  <div className="mt-4 row">
                    <div className="col-auto">
                      <h4>
                        <b>IDN</b>
                      </h4>
                      <span className="text-secondary">4.00</span>
                    </div>
                    <div className="col-auto">
                      <img src={require("../../assets/Vector.png")} />
                    </div>
                    <div className="col-auto">
                      <h4>
                        <b>JPN</b>
                      </h4>
                      <span className="text-secondary">3.00</span>
                    </div>
                    <div className="col-auto">
                      <div className="row">
                        <div className="col-auto">
                          <span className="text-secondary">
                            2 jam - 3 hours
                          </span>
                        </div>
                        <div>
                          <span className="text-secondary">1 Transit</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto facility-select-ticket">
                      <div className="row">
                        <div className="col-auto facility-select-ticket-bag">
                          <img src={require("../../assets/Vector2.png")} />
                        </div>
                        <div className="col-auto facility-select-ticket-food">
                          <img src={require("../../assets/Vector2.png")} />
                        </div>
                        <div className="col-auto facility-select-ticket-wifi">
                          <img src={wifi} />
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="row">
                        <div className="col-auto count-select-ticket">
                          <h6>$.3.00</h6>
                        </div>
                        <div className="col-auto pax-select-ticket">
                          <span className="text-secondary">/pax</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 button-select-ticket">
                      <Link to="">
                        <button>Select</button>
                      </Link>
                    </div>
                  </div>
                  <div className="btn-view-detail">
                    <button
                      type="button"
                      className="mt-3 btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target={`#demo`}
                    >
                      View Details <i className="fa fa-sort-down" />
                    </button>
                    <div className="collapse">
                      <div className="mt-3 view-detail-ticket">
                        <div className="row">
                          <div className="col-md-6 view-detail-ticket-left">
                            <div className="text-secondary">
                              <h6>Ticket Detail</h6>
                            </div>
                            <p className="text-secondary">Airline : Garuda</p>
                            <p className="text-secondary">
                              City Departure : jambi - Indonesia
                            </p>
                            <p className="text-secondary">
                              City Destination : xx - xx
                            </p>
                            <p className="text-secondary">
                              Time estimation : 2
                            </p>
                            <p className="text-secondary">
                              Transit : 1 transit
                            </p>
                          </div>
                          <div className="col-md-6 view-detail-ticket-right">
                            <div className="text-secondary">
                              <h6>Facilities</h6>
                            </div>
                            <p className="text-secondary">Refundable : yes</p>
                            <p className="text-secondary">Luggage : yes</p>
                            <p className="text-secondary">Meal : yes</p>
                            <p className="text-secondary">Wifi : yes</p>
                            <p className="text-secondary">Insurance : yes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="btn btn-warning-custom page-link">
                      Previous
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }}>
                    <button className="btn btn-warning-custom page-link">
                      1
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }} className="page-item">
                    <button className="btn btn-warning-custom page-link">
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </section>
  );
};

export default SeacrhResult;
