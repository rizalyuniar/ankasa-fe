import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import icFlight from '../../assets/flight.svg';
import ceklis from '../../assets/icCentang.svg';
import bnr from '../../assets/pesawat.svg';
import icWarning from '../../assets/warning.svg';
import icDot from '../../assets/icDot.svg';
import icDown from '../../assets/btnback.svg';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createFlightBooking, getDetailFlight } from '../../redux/action/flightAction';
import moment from 'moment';
import axios from 'axios';
moment.locale('id');

const FlightDetail = () => {
  //get flight detail
  const [contactPerson, setContactPerson] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContactPerson(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    dispatch(getDetailFlight(setData, setTotalPrice, id));
  }, [id, dispatch]);

  //booking
  const [formData, setFormData] = useState({
    booking_name: '',
    email: '',
    phone_number: '',
    insurance: false,
    title: '',
    fullname: '',
    nationality: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckToggleChange = (event) => {
    const { name, checked } = event.target;
    if (!formData.fullname) {
      setFormData((prevState) => ({ ...prevState, [name]: contactPerson.fullname }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: '' }));
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (!formData.insurance) {
      setFormData((prevState) => ({ ...prevState, [name]: checked }));
    } else {
      setFormData((prevState) => ({ ...prevState, insurance: false }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    dispatch(createFlightBooking(formData, id, token));
  };

  const insurance = (Number(totalPrice) * 5) / 100;
  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
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
            <div className={`col-md-8 p-4  ${styles.leftside}`}>
              <form onSubmit={handleSubmit}>
                <div className={`p-4 ${styles.CPdetail}`}>
                  <div className="d-flex flex-column">
                    <p className={styles.textLabelCP}>Fullname</p>
                    <div className="input-group mb-4">
                      {/* <input type="text" className={`form-control ${styles.inputStyle}`} aria-label="Username" placeholder="Full Name" aria-describedby="basic-addon1" value={formData.booking_name} /> */}
                      <input type="text" className={`form-control ${styles.inputStyle}`} name="booking_name" aria-label="booking_name" placeholder="FullName" aria-describedby="basic-addon1" value={contactPerson.fullname} />
                    </div>
                    <p className={styles.textLabelCP}>Email</p>
                    <div className="input-group mb-4">
                      {/* <input type="email" className={`form-control ${styles.inputStyle}`} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={formData.email} /> */}
                      <input type="email" className={`form-control ${styles.inputStyle}`} name="email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={contactPerson.email} />
                    </div>
                    <p className={styles.textLabelCP}>Phone Number</p>
                    <div className="input-group mb-4">
                      {/* <input type="text" className={`form-control ${styles.inputStyle}`} placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" value={formData.phone_number} /> */}
                      <input type="text" className={`form-control ${styles.inputStyle}`} placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" value={contactPerson.phone_number} />
                    </div>
                    <div className={`d-flex flex-row p-3 mt-3 ${styles.reminder}`}>
                      <img src={icWarning} alt="warning" />
                      <div className="ms-3">Make sure the customer data is correct.</div>
                    </div>
                  </div>
                </div>
                <p className={`mt-5 ${styles.textTitle}`}>Passenger Details</p>

                <div className={`p-4 ${styles.passengerDetail}`}>
                  <div className={`d-flex flex-row p-3 mb-4 ${styles.reminderPassenger}`}>
                    <div className={styles.textPassenger}>Passenger : 1 Adult</div>
                    <div class="form-check form-switch ms-auto">
                      <span className="me-5">Same as contact person</span>
                      <input class="form-check-input" type="checkbox" role="switch" name="fullname" id="flexSwitchCheckDefault" style={{ width: '40px', height: '20px' }} checked={formData.fullname} onChange={handleCheckToggleChange} />
                    </div>
                  </div>

                  <div className="d-flex flex-column">
                    <div>
                      <label htmlFor="title" className={styles.textLabelCP}>
                        Title:
                      </label>
                      <div className="input-group mb-4">
                        <select id="title" name="title" value={formData.title} onChange={handleInputChange} className={`form-control ${styles.inputStyle}`}>
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
                      <label htmlFor="nationality" className={styles.textLabelCP}>
                        Nationality:
                      </label>

                      <div className="input-group mb-4">
                        <select id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} className={`form-control ${styles.inputStyle}`}>
                          <option value="">Choose a nationality</option>
                          <option value="1">WNI</option>
                          <option value="2">WNA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 mt-5 ${styles.passengerDetail}`}>
                  <div className="d-flex align-items-center">
                    <div className="wrapperCheckbox">
                      <input class="form-check-input mt-2 me-3 ms-2" type="checkbox" value="" aria-label="Checkbox for following text input" id="insurance" name="insurance" checked={formData.insurance} onChange={handleCheckboxChange} />
                      <p style={{ marginLeft: '30px', marginTop: '2px' }} className={styles.textInsurance}>
                        Travel Insurance
                      </p>
                    </div>

                    <p className={`ms-auto ${styles.textPriceinsurance}`}>{currencyFormat(insurance)}</p>
                    {/* <p className={`mt-1 ${styles.textPax}`}>/pax</p> */}
                  </div>
                  <hr />
                  <p className={`mb-1 ${styles.textCompensation}`}>Get travel compensation up to {currencyFormat(1250000000)}</p>
                  <a button="button" className={styles.terms} data-bs-toggle="modal" data-bs-target="#terms">
                    *terms & conditions apply
                  </a>
                </div>
                <div class="d-grid gap-2 col-6 mt-5 mx-auto">
                  <button class={`btn ${styles.cstmButton}`} type="submit">
                    Proceed to Payment
                  </button>
                </div>
              </form>
            </div>

            {/* right side */}
            <div className={`col-md-4 p-4 ${styles.rightside}`}>
              {data.map((row) => (
                <>
                  <div className="d-flex flex-row flex-wrap">
                    <img width={170} height={80} src={row.image} alt="garuda" />
                    <p className={`ms-3 ${styles.textGaruda}`}>{row.airline}</p>
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
                    <div className={styles.textTime}>{moment(row.date_departure).format('DD-MM-YYYY')}</div>
                    <img src={icDot} alt="dot" className="mx-3" />
                    <div className={styles.textTime}>
                      {row.time_departure} - {row.time_arrival}
                      {/* Sunday, 15 August 2020 - 12:33 - 15:21 */}
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-4">
                    <img src={ceklis} alt="dot" className="mx-3" />
                    <div className={styles.textOptional}>Refundable</div>
                  </div>
                  <div className="d-flex flex-row mt-3">
                    <img src={ceklis} alt="dot" className="mx-3" />
                    <div className={styles.textOptional}>Can reschedule</div>
                  </div>
                  <hr />
                  <div className="d-flex flex-row mt-3 flex-wrap">
                    <div className={styles.textTotal}>Total Payment</div>
                    <div className={`ms-auto me-3 ${styles.textPrice}`}>{!formData.insurance ? currencyFormat(Number(row.price)) : currencyFormat(Number(row.price) + insurance)}</div>
                    <img src={icDown} alt="down" />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* modal terms & condition */}
      <div className="modal fade" id="terms" tabIndex={-1} aria-labelledby="termsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="termsLabel">
                Terms & Conditions
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <h4>Jenis Tanggung Jawab dalam Kecelakaan Pesawat</h4>
              <p>Berdasarkan Pasal 2 Permenhub No.77 Tahun 2011 tentang Tanggung Jawab Pengangkut Udara, pengangkut yang mengoperasikan pesawat udara wajib bertanggung jawab atas kerugian terhadap:</p>
              <ul>
                <li>Berdasarkan Pasal 2 Permenhub No.77 Tahun 2011 tentang Tanggung Jawab Pengangkut Udara, pengangkut yang mengoperasikan pesawat udara wajib bertanggung jawab atas kerugian terhadap:</li>
                <li>Hilang atau rusaknya bagasi kabin.</li>
                <li>Hilang, musnah, atau rusaknya bagasi tercatat.</li>
                <li>Hilang, musnah, atau rusaknya kargo.</li>
              </ul>

              <h4>Ganti Rugi Kecelakaan Pesawat Bagi Penumpang yang Meninggal Dunia</h4>
              <p>Berdasarkan Pasal 3 Permenhub No.77 Tahun 2011 ganti rugi kecelakaan pesawat untuk penumpang yang meninggal dunia dijelaskan sebagai berikut.</p>
              <ul>
                <li>
                  Penumpang yang meninggal dunia di dalam pesawat udara karena akibat kecelakaan pesawat udara atau kejadian yang semata-mata ada hubungannya dengan pengangkutan udara diberikan ganti kerugian sebesar Rp.1.250.000.000,00
                  (satu miliar dua ratus lima puluh juta rupiah) per penumpang.
                </li>
                <li>
                  Penumpang yang meninggal dunia akibat suatu kejadian yang semata-mata ada hubungannya dengan pengangkutan udara pada saat proses meninggalkan ruang tunggu bandar udara menuju pesawat udara atau pada saat proses turun dari
                  pesawat udara menuju ruang kedatangan di bandar udara tujuan dan atau bandar udara persinggahan (transit) diberikan ganti kerugian sebesar Rp. 500.000.000,00 (lima ratus juta rupiah) per penumpang.
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
