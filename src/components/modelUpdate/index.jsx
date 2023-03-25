import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import style from './update.module.css';

const ModelUpdate = ({ getFlight }) => {
  const [flightUpdate, setFlightUpdate] = useState({
    id_airline: getFlight.id_airline,
    city_departure: getFlight.city_departure,
    city_departure_code: getFlight.city_departure_code,
    city_destination: getFlight.city_destination,
    city_destination_code: getFlight.city_destination_code,
    date_departure: getFlight.date_departure,
    time_departure: getFlight.time_departure,
    date_arrival: getFlight.date_arrival,
    time_arrival: getFlight.time_arrival,
    transit_count: getFlight.transit_count,
    flight_trip: getFlight.flight_trip,
    flight_class: getFlight.flight_class,
    capacity: getFlight.capacity,
    price: getFlight.price,
    luggage: true,
    inflight_meal: true,
    wifi: true,
    refundable: true,
    reschedule: true,
    code: getFlight.code,
    terminal: getFlight.terminal,
    gate: getFlight.gate,
  });

  // update
  const handleChangeUpdate = (e) => {
    setFlightUpdate({
      ...flightUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/flight/${getFlight.id}`, flightUpdate, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Flight Updated`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(`${err.response}`);
      });
  };

  return (
    <div className="modal fade" id={`update${getFlight.id}`} tabIndex={-1} aria-labelledby="updateLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateLabel">
              Update Airlines
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input type="text" name="id_airline" placeholder="Id Airline" value={flightUpdate.id_airline} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="city_departure" placeholder="Departure" value={flightUpdate.city_departure} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="city_departure_code" placeholder="Departure Code" value={flightUpdate.city_departure_code} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="city_destination" placeholder="Destination" value={flightUpdate.city_destination} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="city_destination_code" placeholder="Destination Code" value={flightUpdate.city_destination_code} className={style.input} onChange={handleChangeUpdate} />

              {/* Date */}
              <div className="wrapper d-flex gap-5">
                <div className="wrapper-time">
                  <label className={style.time}>Departure Date</label>
                  <input type="date" name="date_departure" value={flightUpdate.date_departure} className={style.input} onChange={handleChangeUpdate} />
                </div>

                <div className="wrapper-time">
                  <label className={style.time}>Departure Time</label>
                  <input type="time" name="time_departure" value={flightUpdate.time_departure} className={style.input} onChange={handleChangeUpdate} />
                </div>
              </div>

              {/* time */}
              <div className="wrapper d-flex gap-5">
                <div className="wrapper-time">
                  <label className={style.time}>Arrival Date</label>
                  <input type="date" name="date_arrival" placeholder="Phone Number" value={flightUpdate.date_arrival} className={style.input} onChange={handleChangeUpdate} />
                </div>

                <div className="wrapper-time">
                  <label className={style.time}>Arrival Time</label>
                  <input type="time" name="time_arrival" placeholder="Phone Number" value={flightUpdate.time_arrival} className={style.input} onChange={handleChangeUpdate} />
                </div>
              </div>

              <input type="text" name="transit_count" placeholder="Transit" value={flightUpdate.transit_count} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="flight_trip" placeholder="Flight Trip Ex: 1,2" value={flightUpdate.flight_trip} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="flight_class" placeholder="Flight Class Ex: 1,2" value={flightUpdate.flight_class} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="capacity" placeholder="Total Seat" value={flightUpdate.capacity} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="price" placeholder="Price" value={flightUpdate.price} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="code" placeholder="Airline Type" value={flightUpdate.code} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="terminal" placeholder="Terminal" value={flightUpdate.terminal} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="gate" placeholder="Gate" value={flightUpdate.gate} className={style.input} onChange={handleChangeUpdate} />

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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-outline-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelUpdate;
