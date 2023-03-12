import React, { useState } from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import imgAirline from '../../../assets/airline.png';
import style from './flight.module.css';

const AdminFlight = () => {
  // get Data Flight
  const [getFlights, setGetFlights] = useState([]);

  // create Flight
  const [flight, setFlight] = useState({
    name: '',
    city_departure: '',
    city_destination: '',
    time_departure: '',
    time_arrival: '',
    transit_count: '',
    terminal: '',
    gate: '',
    stock: '',
    luggage: '',
    inflight_meal: '',
    wifi: '',
    price: '',
    image: '',
  });

  // update Flight
  const { id, name, city_departure, city_destination, time_departure, time_arrival, transit_count, terminal, gate, stock, luggage, inflight_meal, wifi, price, image } = getFlights;

  const [flightUpdate, setFlightUpdate] = useState({
    name,
    city_departure,
    city_destination,
    time_departure,
    time_arrival,
    transit_count,
    terminal,
    gate,
    stock,
    luggage,
    inflight_meal,
    wifi,
    price,
    image,
  });

  // create
  const handleUpload = (e) => {
    setFlight((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  // update
  const handleUploadUpdate = (e) => {
    setFlightUpdate((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChangeUpdate = (e) => {
    setFlightUpdate({
      ...flightUpdate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            <div className="container-fluid px-4">
              <PageHeading title="Flight Schedule" />

              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
                Add Schedule
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Images
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Airlines Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Departure
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Destination
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Time
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Transit
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Terminal
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Gate
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Total Seat
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Facility
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Price
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center py-3">
                      <img src={imgAirline} style={{ width: '70px', height: '50px', objectFit: 'cover' }} alt="airline" />
                    </td>

                    <td className="align-middle text-center">Garuda Indonesia</td>

                    <td className="align-middle text-center">Jakarta</td>

                    <td className="align-middle text-center">Bali</td>

                    <td className="align-middle text-center">13:00 - 14:30</td>

                    <td className="align-middle text-center">1 Transit</td>

                    <td className="align-middle text-center">Terminal 2</td>

                    <td className="align-middle text-center">Gate 2</td>

                    <td className="align-middle text-center">220</td>

                    <td className="align-middle text-center">Wifi | Meal </td>

                    <td className="align-middle text-center">Rp. 990000</td>

                    <td className="align-middle text-center d-flex gap-1 py-5">
                      <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#update">
                        <i className="bi bi-pencil-square" />
                      </button>

                      <button className="btn btn-danger btn-sm">
                        <i className="bi bi-trash-fill" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>

      {/* Moodal Create*/}
      <div className="modal fade" id="create" tabIndex={-1} aria-labelledby="createLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createLabel">
                Create Airlines
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form action="">
              <div className="modal-body">
                <input type="text" name="name" placeholder="Name" value={flight.name} className={style.input} onChange={handleChange} />

                <input type="text" name="city_departure" placeholder="Departure" value={flight.city_departure} className={style.input} onChange={handleChange} />

                <input type="text" name="city_destination" placeholder="Destination" value={flight.city_destination} className={style.input} onChange={handleChange} />

                <div className="wrapper d-flex gap-5">
                  <div className="wrapper-time">
                    <label className={style.time}>Departure Time</label>
                    <input type="time" name="time_departure" value={flight.time_departure} className={style.input} onChange={handleChange} />
                  </div>

                  <div className="wrapper-time">
                    <label className={style.time}>Arrival Time</label>
                    <input type="time" name="time_arrival" placeholder="Phone Number" value={flight.time_arrival} className={style.input} onChange={handleChange} />
                  </div>
                </div>

                <input type="text" name="transit_count" placeholder="transit_count" value={flight.transit_count} className={style.input} onChange={handleChange} />

                <input type="text" name="terminal" placeholder="Terminal" value={flight.terminal} className={style.input} onChange={handleChange} />

                <input type="text" name="gate" placeholder="Gate" value={flight.gate} className={style.input} onChange={handleChange} />

                <input type="text" name="stock" placeholder="Total Seat" value={''} className={style.input} onChange={handleChange} />

                <label className={style.time}>Facility</label>
                <div className={`wrapperFacility d-flex gap-3 ${style.wrapperFacility}`}>
                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="wifi" value={flight.wifi} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Wifi
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="inflight_meal" value={flight.inflight_meal} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Meal
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="luggage" value={flight.luggage} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      luggage
                    </label>
                  </div>
                </div>

                <input type="text" name="price" placeholder="Price" value={''} className={style.input} onChange={handleChange} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={''} onChange={handleUpload} />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Moodal Update*/}
      <div className="modal fade" id="update" tabIndex={-1} aria-labelledby="updateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateLabel">
                Update Airlines
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form action="">
              <div className="modal-body">
                <input type="text" name="name" placeholder="Name" value={flightUpdate.name} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="city_departure" placeholder="Departure" value={flightUpdate.city_departure} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="city_destination" placeholder="Destination" value={flightUpdate.city_destination} className={style.input} onChange={handleChangeUpdate} />

                <div className="wrapper d-flex gap-5">
                  <div className="wrapper-time">
                    <label className={style.time}>Departure Time</label>
                    <input type="time" name="time_departure" value={flightUpdate.time_departure} className={style.input} onChange={handleChangeUpdate} />
                  </div>

                  <div className="wrapper-time">
                    <label className={style.time}>Arrival Time</label>
                    <input type="time" name="time_arrival" placeholder="Phone Number" value={flightUpdate.time_arrival} className={style.input} onChange={handleChangeUpdate} />
                  </div>
                </div>

                <input type="text" name="transit_count" placeholder="transit_count" value={flightUpdate.transit_count} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="terminal" placeholder="Terminal" value={flightUpdate.terminal} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="gate" placeholder="Gate" value={flightUpdate.gate} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="stock" placeholder="Total Seat" value={''} className={style.input} onChange={handleChangeUpdate} />

                <label className={style.time}>Facility</label>
                <div className={`wrapperFacility d-flex gap-3 ${style.wrapperFacility}`}>
                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="wifi" value={flightUpdate.wifi} onChange={handleChangeUpdate} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Wifi
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="inflight_meal" value={flightUpdate.inflight_meal} onChange={handleChangeUpdate} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Meal
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="luggage" value={flightUpdate.luggage} onChange={handleChangeUpdate} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      luggage
                    </label>
                  </div>
                </div>

                <input type="text" name="price" placeholder="Price" value={flightUpdate.image} className={style.input} onChange={handleChangeUpdate} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={''} onChange={handleUploadUpdate} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AdminFlight;
