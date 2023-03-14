import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import garuda from "../../assets/airline.png";
import icFlight from "../../assets/flight.svg";
import ceklis from "../../assets/icCentang.svg";
import bnr from "../../assets/pesawat.svg";
import icWarning from "../../assets/warning.svg";
import icDot from "../../assets/icDot.svg";
import icDown from "../../assets/btnback.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const FlightDetail = () => {
  //get flight detail
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/flight/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  //booking
  const [formData, setFormData] = useState({
    title: "",
    fullname: "",
    booking_name: "",
    email: "",
    phone_number: "",
    nationality: "",
    insurance: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: checked }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/booking/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      swal.fire({
        title: "booking Added",
        text: `New booking have been added`,
        icon: "success",
      });
      return navigate(`/mybooking/${id}`);
    } catch (error) {
      console.error(error);
      swal.fire({
        title: "booking Added error",
        text: `New booking error`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="row">
          <div className={`${styles.benner} col-12`}>
            <img className={styles.bnr} src={bnr} alt="" />
            <h2 className={styles.textPerson}>Contact Person Details</h2>
            <h3 className={styles.fd}>Flight Detail</h3>
            <h4 className={styles.vd}>View Detail</h4>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className={`col-md-8 p-4 ${styles.leftside}`}>
                <div className={`p-4 ${styles.CPdetail}`}>
                  <div className="d-flex flex-column">
                    <p className={styles.textLabelCP}>Full Name</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        aria-label="Username"
                        placeholder="Full Name"
                        aria-describedby="basic-addon1"
                        value={formData.booking_name}
                      />
                    </div>
                    <p className={styles.textLabelCP}>Email</p>
                    <div className="input-group mb-4">
                      <input
                        type="email"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        value={formData.email}
                      />
                    </div>
                    <p className={styles.textLabelCP}>Phone Number</p>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="Phone"
                        aria-label="Phone"
                        aria-describedby="basic-addon1"
                        value={formData.phone_number}
                      />
                    </div>
                    <div
                      className={`d-flex flex-row p-3 mt-3 ${styles.reminder}`}
                    >
                      <img src={icWarning} alt="warning" />
                      <div className="ms-3">
                        Make sure the customer data is correct.
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>

                <div className={`p-4 ${styles.passengerDetail}`}>
                  <div
                    className={`d-flex flex-row p-3 mb-4 ${styles.reminderPassenger}`}
                  >
                    <div className={styles.textPassenger}>
                      Passenger : 1 Adult
                    </div>
                  </div>

                  <div className="d-flex flex-column">
                    <div>
                      <label htmlFor="title" className={styles.textLabelCP}>
                        Title:
                      </label>
                      <div className="input-group mb-4">
                        <select
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className={`form-control ${styles.inputStyle}`}
                        >
                          <option value="">Choose a title</option>
                          <option value="1">Mr</option>
                          <option value="2">Ms</option>
                          <option value="3">Mrs</option>
                        </select>
                      </div>
                    </div>
                    <label htmlFor="fullname" className={styles.textLabelCP}>
                      Full Name
                    </label>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className={`form-control ${styles.inputStyle}`}
                        placeholder="FullName"
                        aria-label="FullName"
                        aria-describedby="basic-addon1"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nationality"
                        className={styles.textLabelCP}
                      >
                        Nationality:
                      </label>

                      <div className="input-group mb-4">
                        <select
                          id="nationality"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleInputChange}
                          className={`form-control ${styles.inputStyle}`}
                        >
                          <option value="">Choose a nationality</option>
                          <option value="1">WNI</option>
                          <option value="2">WNA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <label className={`mt-5 ${styles.textTitle}`}>
                  Passenger Details
                </label>
                <div className={`p-4 ${styles.passengerDetail}`}>
                  <div className="d-flex flex-row">
                    <input
                      class="form-check-input mt-1 me-3"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                      id="insurance"
                      name="insurance"
                      checked={formData.insurance}
                      onChange={handleCheckboxChange}
                    />
                    <p className={styles.textInsurance}>Travel Insurance</p>
                    {/* <p className={`ms-auto ${styles.textPriceinsurance}`}>
                      $ {data.price}
                    </p> */}
                    {/* <p className={`mt-1 ${styles.textPax}`}>/pax</p> */}
                  </div>
                  <hr />
                  <p className={styles.textCompensation}>
                    Get travel compensation up to $ 10.000,00
                  </p>
                </div>
                <div class="d-grid gap-2 col-6 mt-5 mx-auto">
                  <button class={`btn ${styles.cstmButton}`} type="submit">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </form>

            <div className={`col-md-4 p-4 ${styles.rightside}`}>
              {data.map((row) => (
                <>
                  <div className="d-flex flex-row ">
                    <img src={row.image} alt="garuda" />
                    <p className={`ms-5 ${styles.textGaruda}`}>{row.airline}</p>
                  </div>
                  <div className="d-flex flex-row mt-4">
                    <div className={styles.textCity}>
                      {row.city_departure} ({row.city_departure_code})
                    </div>
                    <img src={icFlight} alt="flight" className="mx-4" />
                    <div className={styles.textCity}>
                      {row.city_destination} ({row.city_destination_code})
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-4">
                    <div className={styles.textTime}>{row.date_departure}</div>
                    <img src={icDot} alt="dot" className="mx-3" />
                    <div className={styles.textTime}>
                      {row.time_departure} - {row.time_arrival}
                    </div>
                  </div>

                  <div className="d-flex flex-row mt-4">
                    <img src={ceklis} alt="dot" className="mx-3" />
                    <div className={styles.textOptional}>Refundable</div>
                  </div>
                  <div className="d-flex flex-row mt-3">
                    <img src={ceklis} alt="dot" className="mx-3" />
                    <div className={styles.textOptional}>Refundable</div>
                  </div>
                  <hr />
                  <div className="d-flex flex-row mt-3">
                    <div className={styles.textTotal}>Total Payment</div>
                    <div className={`ms-auto me-3 ${styles.textPrice}`}>
                      Rp. {row.price}
                    </div>
                    <img src={icDown} alt="down" />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlightDetail;
