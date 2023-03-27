import axios from "axios";
import Swal from "sweetalert2";

export const getFlight = (setData, cityDept, cityDest, deptDate, flightTrip, flightClass, person, airline, luggage, inflight_meal, wifi, transit) => async (dispatch) => {
  try {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/flight?${!transit ? '' : `transit=${transit}`}&${!cityDept ? '' : `cityDept=${cityDept}`}&${!cityDest ? '' : `cityDest=${cityDest}`}&${!deptDate ? '' : `deptDate=${deptDate}`}&${!flightTrip ? '' : `flightTrip=${flightTrip}`}&${!person ? '' : `person=${person}`
        }&${!flightClass ? '' : `flightClass=${flightClass}`}&${!airline ? '' : `airline=${airline}`}&${!luggage ? '' : `luggage=${luggage}`}&${!inflight_meal ? '' : `inflight_meal=${inflight_meal}`}&${!wifi ? '' : `wifi=${wifi}`}`
      )
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch({ type: 'GET_ALL_FLIGHT', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

export const getDetailFlight = (setData, setTotalPrice, id) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/flight/${id}`)
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
        setTotalPrice(response.data.data[0].price)
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch({ type: 'GET_DETAIL_FLIGHT', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

export const createFlightBooking = (formData, id, token) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: `${res.data.message}`,
          text: `New booking have been added`,
          icon: 'success',
        });
        window.location.replace(`/mybooking/${id}`);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: `${error.response.data.message}`,
          text: `New booking error`,
          icon: 'error',
        });
      });
    dispatch({ type: 'CREATE_FLIGHT_BOOKING', payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};