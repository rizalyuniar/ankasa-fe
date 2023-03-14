import React, { useEffect, useState } from 'react';
import style from './navbar.module.css';
import navBrand from '../../assets/vector 02.png';
import iconChange from '../../assets/Vector.png';
import image from '../../assets/profile.png';
import CardNotif from '../cardNotif';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [login, setLogin] = useState('');
  const [idUser, setIdUser] = useState('');
  const [toggle, setToggle] = useState(false);
  const [flight, setFlight] = useState({
    city_departure: '',
    city_destination: '',
    time_departure: '',
    flight_class: '',
    person: '',
  });

  useEffect(() => {
    setLogin(localStorage.getItem('token'));
    setIdUser(localStorage.getItem('id'));
  });

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    window.location.replace(`/search?cityDept=${flight.city_departure}&&cityDest=${flight.city_destination}&deptDate=${flight.time_departure}&flightTrip=1&flightClass=${flight.flight_class}&person=${flight.person}`);
  };

  return (
    <>
      <nav className={`${style.navbar} navbar navbar-expand-lg stick-top`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img src={navBrand} alt="Logo" width="30" height="24" className="d-inline-block me-3 align-text-top" color="" />
            Ankasa
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav mx-auto ${style.navbarNav}`}>
              <form className="d-flex my-3 mx-lg-4 mx-md-0 mx-sm-0 position-relative" role="search">
                <i className={`${style.iconSearch} bi bi-search`} />
                <input className={`${style.formControl} me-2`} type="search" placeholder="Where you want to go?" />
              </form>

              <li className={`nav-item mx-lg-4 mx-md-0 mx-sm-0 my-lg-3 mx-md-0 my-sm-0`}>
                <button type="button" className={`nav-link active ${style.navLink}`} data-bs-toggle="modal" data-bs-target="#findTicket">
                  Find Ticket
                </button>
              </li>

              <li className={`nav-item mx-lg-4 mx-md-0 mx-sm-0 my-lg-3 mx-md-0 my-sm-0`}>
                <a className={`nav-link active ${style.navLink}`} href={`/mybooking/${idUser}`}>
                  My Booking
                </a>
              </li>
            </ul>

            {!login ? (
              <>
                <button className={style.buttonLogin} onClick={() => window.location.replace('/login')}>
                  Login
                </button>

                <button className={style.buttonSignup} onClick={() => window.location.replace('/register')}>
                  Signup
                </button>
              </>
            ) : (
              <>
                <Link to={`/chat/${idUser}`} className={`nav-item mx-lg-2 mx-md-0 mx-sm-0 me-sm-4 me-md-4 ${style.navLinkIcon}`}>
                  <i className={`bi bi-chat-dots-fill ${style.iconMessage}`} />
                </Link>

                <button type="button" className={`nav-item mx-lg-5 mx-md-0 mx-sm-0 me-sm-4 ${style.navLinkIcon}`} data-bs-toggle="modal" data-bs-target="#notification">
                  <i className={`bi bi-bell ${style.iconMessage}`} />
                </button>

                <div className="dropdown">
                  <button className={`${style.buttonProfile} btn btn-secondary`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={image} alt="img" className={style.imageProfile} />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end lh-1 mt-2">
                    <li className="mb-2">
                      <button type="button" className="dropdown-item" onClick={() => window.location.replace(`/profile/${idUser}`)}>
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.clear();
                          window.location.reload();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* modal findticket */}
      <div className="modal fade" id="findTicket" tabIndex={-1} aria-labelledby="findTicketLabel" aria-hidden="true">
        <div className={`${style.modalDialog} modal-dialog`}>
          <div className="modal-content p-3">
            <div className="modal-body">
              <form>
                <span className={style.titleName}>Hey, </span>
                <p className={style.titleWant}>Where you want to go?</p>
                <span className={style.titleRecent}>Recently Searched</span>

                <div className={style.wrapperCard}>
                  <div className="wrapperFromTo d-flex justify-content-between">
                    <span className={style.from}>From</span>
                    <span className={style.from}>To</span>
                  </div>

                  {!toggle ? (
                    <>
                      <div className={`${style.wrapperDestination}`}>
                        <input type="text" className={style.fromDestination} placeholder="Jakarta" name="city_departure" value={flight.city_departure} onChange={handleChange} />

                        <button type="button" className={style.buttonChange} onClick={() => setToggle(true)}>
                          <img src={iconChange} alt="" />
                        </button>

                        <input type="text" className={style.fromDestination} placeholder="Surabaya" name="city_destination" value={flight.city_destination} onChange={handleChange} />
                      </div>

                      <div className="wrapperCountry d-flex justify-content-between">
                        <span className={style.from}>Indonesia</span>
                        <span className={style.from}>Indonesia</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`${style.wrapperDestination}`}>
                        <input type="text" className={style.fromDestination} placeholder="Surabaya" name="city_destination" value={flight.city_departure} onChange={handleChange} />

                        <button type="button" className={style.buttonChange} onClick={() => setToggle(false)}>
                          <img src={iconChange} alt="" />
                        </button>

                        <input type="text" className={style.fromDestination} placeholder="Jakarta" name="city_departure" value={flight.city_destination} onChange={handleChange} />
                      </div>

                      <div className="wrapperCountry d-flex justify-content-between">
                        <span className={style.from}>Indonesia</span>
                        <span className={style.from}>Indonesia</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="container my-4">
                  <div className="row">
                    <div className="col-md-6 p-0 gx-1 pe-1">
                      <button className={style.buttonOption}>
                        <i className="bi bi-airplane-fill me-3 fs-5" />
                        <span>One Way</span>
                      </button>
                    </div>

                    <div className="col-md-6 p-0 ps-1">
                      <button className={style.buttonOptionRound}>
                        <i className="bi bi-arrow-clockwise me-3 fs-5" />
                        <span>Round Trip</span>
                      </button>
                    </div>
                  </div>
                </div>

                <p className={style.subTitle}>Departure</p>
                <input type="date" className={style.formDate} name="time_departure" value={flight.time_departure} onChange={handleChange} />

                <div className="container p-0">
                  <div className="row">
                    <p className={style.subTitle}>How many person ?</p>
                    <div className="col-md-12 ">
                      <input type="text" className={style.formCek} placeholder="Child" name="person" value={flight.person} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <p className={`p-0 ${style.subTitle}`}>Which class do you want?</p>

                    <div className="wrapper d-flex justify-content-between">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flight_class" id="economy" value="1" onChange={handleChange} />
                        <label className={`form-check-label ${style.formCheckLabel}`} htmlFor="economy">
                          Economy
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flight_class" id="business" value="2" onChange={handleChange} />
                        <label className={`form-check-label ${style.formCheckLabel}`} htmlFor="business">
                          Business
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flight_class" id="firstclass" value="3" onChange={handleChange} />
                        <label className={`form-check-label ${style.formCheckLabel}`} htmlFor="firstclass">
                          First Class
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" className={style.searchFlight} onClick={handleSearch}>
                  SEARCH FLIGHT
                  <i className="bi bi-arrow-right fs-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* modal Notification */}
      <div className="modal fade" id="notification" tabIndex={-1} aria-labelledby="notificationLabel" aria-hidden="true">
        <div className={`${style.modalDialog} modal-dialog`}>
          <div className="modal-content p-3">
            <div className="modal-body">
              <form>
                <span className={style.titleNotif}>Notification</span>
                <div className={style.wrapper}>
                  <span className={style.notif}>Notifications</span>
                  <span className={style.clear}>Clear</span>
                </div>

                <CardNotif title="Congratulations" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio eligendi deserunt et ipsam culpa explicabo, fuga dicta dignissimos nobis?" time="2h" />
                <CardNotif title="Ticket Booked" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...." time="1 June 2020, 12:33 AM" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
