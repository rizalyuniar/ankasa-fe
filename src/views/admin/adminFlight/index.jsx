import React, { useEffect, useState } from "react";
import Footer from "../../../components/Admin/Footer";
import PageHeading from "../../../components/Admin/PageHeading";
import Sidebar from "../../../components/Admin/Sidebar";
import Topbar from "../../../components/Admin/Topbar";
import imgAirline from "../../../assets/airline.png";
import style from "./flight.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import ModelUpdate from "../../../components/modelUpdate";

const AdminFlight = () => {
  // get Data Flight
  const [getFlights, setGetFlights] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  // create Flight
  const [flight, setFlight] = useState({
    id_airline: "",
    city_departure: "",
    city_departure_code: "",
    city_destination: "",
    city_destination_code: "",
    date_departure: "",
    time_departure: "",
    date_arrival: "",
    time_arrival: "",
    transit_count: "",
    flight_trip: "",
    flight_class: "",
    capacity: "",
    price: "",
    luggage: true,
    inflight_meal: true,
    wifi: true,
    refundable: true,
    reschedule: true,
    code: "",
    terminal: "",
    gate: "",
  });

  console.log(flight);

  // get Data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/flight`)
      .then((res) => {
        setGetFlights(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // create
  // handle Checkbox
  // const handleCheckboxChange = (e) => {
  //   setFlight({
  //     ...flight,
  //     [e.target.name]: e.target.checked,
  //   });
  // };

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/flight`, flight)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Flight Created`,
          icon: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(`${err.response}`);
      });
  };
  const currencyFormat = (num) => {
    return (
      "Rp. " +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  };

  // delete
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/flight/${id}`)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `New Airlines Added`,
          icon: "success",
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
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

              <button
                type="button"
                className="btn btn-outline-primary mb-4"
                data-bs-toggle="modal"
                data-bs-target="#create"
              >
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
                  {getFlights.map((data) => {
                    return (
                      <>
                        <ModelUpdate getFlight={data} />
                        <tr>
                          <td className="align-middle text-center py-3">
                            <img
                              src={data.image}
                              style={{ height: "20px", objectFit: "cover" }}
                              alt="airline"
                            />
                          </td>
                          <td className="align-middle text-center">
                            {data.airline}
                          </td>
                          <td className="align-middle text-center">
                            {data.city_departure}
                          </td>
                          <td className="align-middle text-center">
                            {data.city_destination}
                          </td>
                          <td className="align-middle text-center">
                            {data.time_departure} - {data.time_arrival}
                          </td>
                          <td className="align-middle text-center">
                            {data.transit_count} Transit
                          </td>
                          <td className="align-middle text-center">
                            Terminal {data.terminal}
                          </td>
                          <td className="align-middle text-center">
                            Gate {data.gate}
                          </td>
                          <td className="align-middle text-center">
                            {data.capacity}
                          </td>
                          <td className="align-middle text-center">
                            {data.wifi === true ? <i class="bi bi-wifi" /> : ""}{" "}
                            |{" "}
                            {data.luggage === true ? (
                              <i class="bi bi-briefcase-fill" />
                            ) : (
                              ""
                            )}{" "}
                            |{" "}
                            {data.inflight_meal === true ? (
                              <i class="bi bi-cup-hot-fill" />
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="align-middle text-center">
                            {currencyFormat(data.price)}
                          </td>
                          <td className="align-middle text-center d-flex gap-1 py-5">
                            <button
                              type="button"
                              className="btn btn-success btn-sm me-2"
                              data-bs-toggle="modal"
                              data-bs-target={`#update${data.id}`}
                            >
                              <i className="bi bi-pencil-square" />
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(data.id)}
                            >
                              <i className="bi bi-trash-fill" />
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
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
      <div
        className="modal fade"
        id="create"
        tabIndex={-1}
        aria-labelledby="createLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createLabel">
                Create Airlines
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input
                  type="text"
                  name="id_airline"
                  placeholder="Id Airline"
                  value={flight.id_airline}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city_departure"
                  placeholder="Departure"
                  value={flight.city_departure}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city_departure_code"
                  placeholder="Departure Code"
                  value={flight.city_departure_code}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city_destination"
                  placeholder="Destination"
                  value={flight.city_destination}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city_destination_code"
                  placeholder="Destination Code"
                  value={flight.city_destination_code}
                  className={style.input}
                  onChange={handleChange}
                />

                {/* Date */}
                <div className="wrapper d-flex gap-5">
                  <div className="wrapper-time">
                    <label className={style.time}>Departure Date</label>
                    <input
                      type="date"
                      name="date_departure"
                      value={flight.date_departure}
                      className={style.input}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wrapper-time">
                    <label className={style.time}>Departure Time</label>
                    <input
                      type="time"
                      name="time_departure"
                      value={flight.time_departure}
                      className={style.input}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* time */}
                <div className="wrapper d-flex gap-5">
                  <div className="wrapper-time">
                    <label className={style.time}>Arrival Date</label>
                    <input
                      type="date"
                      name="date_arrival"
                      value={flight.date_arrival}
                      className={style.input}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="wrapper-time">
                    <label className={style.time}>Arrival Time</label>
                    <input
                      type="time"
                      name="time_arrival"
                      value={flight.time_arrival}
                      className={style.input}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="transit_count"
                  placeholder="Transit"
                  value={flight.transit_count}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="flight_trip"
                  placeholder="Flight Trip Ex: 1,2"
                  value={flight.flight_trip}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="flight_class"
                  placeholder="Flight Class Ex: 1,2"
                  value={flight.flight_class}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="capacity"
                  placeholder="Total Seat"
                  value={flight.capacity}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={flight.price}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="code"
                  placeholder="Airline Type"
                  value={flight.code}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="terminal"
                  placeholder="Terminal"
                  value={flight.terminal}
                  className={style.input}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="gate"
                  placeholder="Gate"
                  value={flight.gate}
                  className={style.input}
                  onChange={handleChange}
                />

                {/* <label className={style.time}>Facility</label>
                <div className={`wrapperFacility d-flex gap-3 ${style.wrapperFacility}`}>
                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="wifi" checked={isChecked} onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Wifi
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="inflight_meal" value={flight.inflight_meal} checked={isChecked} onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Meal
                    </label>
                  </div>

                  <div className={`form-check ${style.formCheck}`}>
                    <input id="flexCheckDefault" className="form-check-input" type="checkbox" name="luggage" checked={isChecked} onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      luggage
                    </label>
                  </div>
                </div> */}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
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
