import React, { useState, useEffect } from 'react';
import './search-result.css';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import bnr from '../../assets/pesawat.svg';
import { useDispatch } from 'react-redux';
import { getFlight } from '../../redux/action/flightAction';
import moment from 'moment';

const SeacrhResult = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    city_departure: '',
    city_destination: '',
    airline1: '',
    flightClass: '',
    flightTrip: '',
    luggage: '',
    inflight_meal: '',
    wifi: '',
    transit: '',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const cityDept = searchParams.get('cityDept');
  const cityDest = searchParams.get('cityDest');
  const deptDate = searchParams.get('deptDate');
  const flightTrip = searchParams.get('flightTrip');
  const flightClass = searchParams.get('flightClass');
  const person = searchParams.get('person');
  const airline = searchParams.get('airline');
  const luggage = searchParams.get('luggage');
  const inflight_meal = searchParams.get('inflight_meal');
  const wifi = searchParams.get('wifi');
  const transit = searchParams.get('transit');

  const handleSearch = () => {
    window.location.replace(
      `/search?cityDept=${search.city_departure}&cityDest=${search.city_destination}&airline=${search.airline1}&flightClass=${search.flightClass}&flightTrip=${search.flightTrip}&luggage=${search.luggage}&inflight_meal=${search.inflight_meal}&wifi=${search.wifi}&transit=${search.transit}`
    );
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // get flight
    dispatch(getFlight(setData, cityDept, cityDest, deptDate, flightTrip, flightClass, person, airline, luggage, inflight_meal, wifi, transit));
  }, [dispatch]);

  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
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
                    <img className="" src={require('../../assets/aa.png')} />
                  </div>
                  <div className="col-auto input-from">
                    <div>
                      <span>From</span>
                    </div>
                    <div>
                      <input placeholder="Medan (IDN)" name="city_departure" value={search.city_departure} onChange={handleChange} className="formInput" />
                    </div>
                    <div></div>
                  </div>
                  <div className="col-auto icon-switch">
                    <img className="" src={require('../../assets/vektorw.png')} />
                  </div>
                  <div className="col-auto input-to">
                    <div className="to">
                      <span>To</span>
                    </div>
                    <div>
                      <input placeholder="Tokyo (JPN)" name="city_destination" value={search.city_destination} onChange={handleChange} className="formInput" />
                    </div>
                  </div>
                  <div className="mt-1 result-search">
                    <div className="row">
                      <div className="col-auto">
                        <p className="date">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img src={require('../../assets/centang.png')} />
                      </div>
                      <div className="col-auto">
                        <p className="passenger">6 Passenger</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img src={require('../../assets/centang.png')} />
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
              <button type="button" onClick={handleSearch}>
                Change Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 container container-main-search-result">
          <div className="row">
            <div className="col-md-4 container-filter-search-result">
              <div className="title-filter-search-result">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-auto">
                    <h5>
                      <b>Filter</b>
                    </h5>
                  </div>
                  <div className="col-auto">
                    <button className="button-title-filter-search-result" type="reset" form="filter-form">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 form-filter-search-result">
                <form id="filter-form">
                  {/* FILTER AIRLINE */}
                  <div className="airline text-left">
                    <button type="button" className="mt-3 btn btn-info" data-bs-toggle="collapse" data-bs-target="#select-airline">
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
                          <input className="form-check-input" type="checkbox" name="airline1" value="garuda" onChange={handleChange} />
                        </div>

                        <div className="mt-2 col-md-10">
                          <span>Air Asia</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="airline1" value="asia" onChange={handleChange} />
                        </div>

                        <div className="mt-2 col-md-10">
                          <span>Lion Air</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="airline1" value="lion" onChange={handleChange} />
                        </div>

                        <div className="mt-2 col-md-10">
                          <span>SuperAir Jet</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="airline1" value="super" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* FILTER TYPE */}
                  <div className="type text-left">
                    <button type="button" className="btn btn-info" data-bs-toggle="collapse" data-bs-target="#filter-type">
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
                          <input className="form-check-input" type="checkbox" id="filter-checkbox" name="flightClass" value="1" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Business</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="flightClass" value="2" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>First Class</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="flightClass" value="3" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* TRANSIT */}
                  <div className="transit text-left">
                    <button type="button" className="btn btn-info" data-bs-toggle="collapse" data-bs-target="#filter-transit">
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
                          <input className="form-check-input" type="checkbox" name="transit" value="0" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Transit</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="transit" value="1" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Trasit 2+</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="transit" value="2" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  {/* FACILITIES */}
                  <div className="facilities text-left">
                    <button type="button" className="btn btn-info" data-bs-toggle="collapse" data-bs-target="#filter-facilities">
                      <div className="row">
                        <div className="col-auto">
                          <b>Facilities</b>
                        </div>
                        <div className="col-auto icon-filter-facilities">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="filter-facilities" className="collapse-facilities show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Luggage</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="luggage" value="true" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Lunch</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="inflight_meal" value="true" onChange={handleChange} />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Wi-fi</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="wifi" value="true" onChange={handleChange} />
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
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-auto p-0 ms-3 mt-1">
                    <h5>
                      <b>Select Filter</b>
                    </h5>
                  </div>
                </div>
              </div>

              {/* TICKET */}

              <div className="mt-3 form-select-ticket-search-result">
                <div className="select-ticket-search-result">
                  {!data.length ? (
                    <h3>Flight Schedule Not Found!</h3>
                  ) : (
                    data.map((row) => (
                      <>
                        <div className="row d-flex align-items-center">
                          <div className="col-auto logo-airline mt-3">
                            <img src={row.image} />
                          </div>
                          <div className="col-auto name-airplane-select-ticket mt-3">
                            <span className="text-secondary">{row.airline}</span>
                          </div>
                        </div>

                        <div className="mt-4 row d-flex align-items-center justify-content-between">
                          <div className="col-auto">
                            <h4>
                              <b>{row.city_departure_code}</b>
                            </h4>
                            <span className="text-secondary">{row.time_departure}</span>
                          </div>
                          <div className="col-auto">
                            <img src={require('../../assets/Vector.png')} />
                          </div>
                          <div className="col-auto">
                            <h4>
                              <b>{row.city_destination_code}</b>
                            </h4>
                            <span className="text-secondary">{row.time_arrival}</span>
                          </div>
                          <div className="col-auto">
                            <div className="row">
                              <div className="col-auto">
                                <span className="text-secondary">2 hours</span>
                              </div>
                              <div>
                                <span className="text-secondary">{row.transit_count} Transit</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto facility-select-ticket">
                            <div className="row">
                              <div className="col-auto facility-select-ticket-wifi">
                                <img src={wifi} />
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="row">
                              <div className="col-auto count-select-ticket d-flex">
                                <h6>{currencyFormat(row.price)}</h6>
                                <span className="text-secondary">/pax</span>
                              </div>
                              <div className="col-auto pax-select-ticket button-select-ticket">
                                <Link to={`/flight/${row.id}`}>
                                  <button className="ms-4">Select</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </>
                    ))
                  )}
                </div>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="btn btn-warning-custom page-link">Previous</button>
                  </li>
                  <li style={{ marginLeft: 3 }}>
                    <button className="btn btn-warning-custom page-link">1</button>
                  </li>
                  <li style={{ marginLeft: 3 }} className="page-item">
                    <button className="btn btn-warning-custom page-link">Next</button>
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
