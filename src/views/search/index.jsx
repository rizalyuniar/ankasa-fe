import React, { useState, useEffect } from 'react';
import './search-result.css';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import bnr from '../../assets/pesawat.svg';
import wifi from '../../assets/wifi.svg';
import axios from 'axios';

const SeacrhResult = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    city_departure: '',
    city_destination: '',
    airline1: '',
    airline2: '',
    airline3: '',
    airline4: '',
  });

  // console.log(`${search.airline1} | ${search.airline2} | ${search.airline3}`);
  const [searchParams, setSearchParams] = useSearchParams();
  const cityDept = searchParams.get('cityDept');
  const cityDest = searchParams.get('cityDest');
  const deptDate = searchParams.get('deptDate');
  const flightTrip = searchParams.get('flightTrip');
  const flightClass = searchParams.get('flightClass');
  const person = searchParams.get('person');

  // const [airline, setAirline] = useState([]);

  // console.log(data);

  const handleSearch = () => {
    window.location.replace(`/search?cityDept=${search.city_departure}&cityDest=${search.city_destination}&airline=${search.airline1}`);
    // window.location.replace(`/search?cityDept=${search.city_departure}&cityDest=${search.city_destination}&airline=${search}`);
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // get flight
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/flight?${!cityDept ? '' : `cityDept=${cityDept}`}&${!cityDest ? '' : `cityDest=${cityDest}`}&${!deptDate ? '' : `deptDate=${deptDate}`}&${!flightTrip ? '' : `flightTrip=${flightTrip}`}&${
          !person ? '' : `person=${person}`
        }&${!flightClass ? '' : `flightClass=${flightClass}`}`
      )
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get airlines for filter
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND_URL}/airline`)
    //   .then((response) => {
    //     console.log(response.data.data);
    //     setAirline(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

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
                      <input placeholder="Medan (IDN)" name="city_departure" value={search.city_departure} onChange={handleChange} />
                    </div>
                    <div></div>
                  </div>
                  <div className="col-auto icon-switch">
                    <img className="" src={require('../../assets/vektorw.png')} />
                  </div>
                  <div className="col-auto input-to">
                    <div>
                      <span>To</span>
                    </div>
                    <div>
                      <input placeholder="Tokyo (JPN)" name="city_destination" value={search.city_destination} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="mt-1 result-search">
                    <div className="row">
                      <div className="col-auto">
                        <p className="date">Monday, 20 July 20</p>
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
                <div className="row">
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
                          <input className="form-check-input" type="checkbox" name="airline2" value="asia" onChange={handleChange} />
                        </div>

                        <div className="mt-2 col-md-10">
                          <span>Lion Air</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="airline3" value="lion" onChange={handleChange} />
                        </div>

                        <div className="mt-2 col-md-10">
                          <span>SuperAir Jet</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="airline4" value="super" onChange={handleChange} />
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
                          <input className="form-check-input" type="checkbox" id="filter-checkbox" name="" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Business</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="filter-checkbox" />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>First Class</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input className="form-check-input" type="checkbox" name="filter-checkbox" />
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
                        <button className="btn dropdown-toggle" type="button" id="sorting" data-bs-toggle="dropdown" aria-expanded="false">
                          <b>Sort order</b>
                        </button>
                        <ul className="dropdown-menu dropdown-menu" aria-labelledby="sorting">
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
                  {!data.length
                    ? 'Flight Schedule Not Found!'
                    : data.map((row) => (
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
                                  <h6>Rp. {row.price}</h6>
                                  <span className="text-secondary">/pax</span>
                                </div>
                                <div className="col-auto pax-select-ticket button-select-ticket">
                                  <Link to={`/flight/${row.id}`}>
                                    <button className="ms-3">Select</button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      ))}
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
