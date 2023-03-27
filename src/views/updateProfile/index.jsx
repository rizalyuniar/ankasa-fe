import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import avatar from '../../assets/avatar.png';
import iconprofile from '../../assets/user.png';
import iconstar from '../../assets/myreview.svg';
import iconsettings from '../../assets/setting.svg';
import iconlogout from '../../assets/logout.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import CreditCard from '../../components/CreditCard';

const Profile = () => {
  const [idUser, setIdUser] = useState('');
  useEffect(() => {
    setIdUser(localStorage.getItem('id'));
  });

  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('users'));
  const id = data.id;
  // get user
  const [profile, setProfile] = useState({
    id: '',
    email: '',
    fullname: '',
    phone_number: '',
    city: '',
    address: '',
    zipcode: '',
    image: '',
  });

  const [creditCard, setCreditCard] = useState([]);
  const [currency, setCurrency] = useState('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setProfile(res.data.data);
        setCreditCard(res.data.data.creditCards);
        setCurrency(res.data.data.creditCards[0].balance);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // update user
  const onUpdateusers = (e) => {
    e.preventDefault();
    const formDatas = new FormData();
    formDatas.append('id', profile.id);
    formDatas.append('email', profile.email);
    formDatas.append('fullname', profile.fullname);
    formDatas.append('phone_number', profile.phone_number);
    formDatas.append('city', profile.city);
    formDatas.append('address', profile.address);
    formDatas.append('zipcode', profile.zipcode);
    formDatas.append('image', images);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/edit/${profile.id}`, formDatas, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          title: 'Update Users Success',
          icon: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [images, setImages] = useState(null);
  const handleImageChanges = (event) => {
    setImages(event.target.files[0]);
  };

  const handleInputChanges = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const onLogout = (e) => {
    // e.prevenDefault();
    localStorage.clear();
    Swal.fire({
      title: 'Logout Success',
      text: `Logout Success!`,
      icon: 'success',
    });
    return navigate('/login');
  };

  return (
    <>
      <Navbar />
      <main className="bodycontent">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="leftside">
                <section className={styles.profilecard}>
                  <div className="container">
                    <div className="row">
                      <form
                        onSubmit={(e) => {
                          onUpdateusers(e);
                        }}
                      >
                        <div className={styles.cardProfile}>
                          <div className={`d-flex flex-row justify-content-center  px-5 ${styles.picProfile}`}>
                            <img width={120} height={120} src={profile.image ? profile.image : avatar} style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="d-flex flex-row justify-content-center my-3 px-5">
                            <input style={{ border: 'none' }} type="file" name="image" onChange={handleImageChanges} />
                          </div>
                          <div className="justify-content-center d-flex">
                            <button type="submit" class="btn btn-primary">
                              Update
                            </button>
                          </div>

                          <div className="d-flex flex-column align-items-center my-3">
                            <h2>{profile.fullname}</h2>
                            <p>{profile.city}</p>
                          </div>

                          <CreditCard creditCard={creditCard} currency={currency} />

                          <div className={`d-flex flex-row mx-3 ${styles.setProfile}`}>
                            <img src={iconprofile} className={styles.iconprofile} />
                            <Link to={`/profile/${idUser}`} style={{ textDecoration: 'none' }}>
                              <p className={`mx-5 ${styles.textProfile}`}> Profile </p>
                            </Link>
                          </div>
                          <div className={`d-flex flex-row mx-3 ${styles.setMyreview}`}>
                            <img src={iconstar} className={styles.iconstar} />
                            <p className={`mx-5 ${styles.textMyreview}`}> My Review </p>
                          </div>
                          <div className={`d-flex flex-row mx-3 ${styles.setSettings}`}>
                            <img src={iconsettings} className={styles.iconsettings} />

                            <p className={`mx-5 ${styles.textSettings}`} style={{ cursor: 'pointer' }}>
                              Settings
                            </p>
                          </div>
                          <button className={`d-flex flex-row mx-3  ${styles.setLogout}`}>
                            <img src={iconlogout} className={styles.iconlogout} />
                            <p style={{ cursor: 'pointer' }} onClick={onLogout} className={`mx-5 ${styles.textLogout}`}>
                              Logout
                            </p>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-md-8">
              <div className={`d-flex flex-column ${styles.rightsideProfile}`}>
                <p className={styles.title}>P R O F I L E</p>
                <p className={styles.subtitle}>Profile: {profile.fullname}</p>
                <form
                  onSubmit={(e) => {
                    onUpdateusers(e);
                  }}
                >
                  <div className="d-flex flex-column flex-md-row my-4 detailProfile">
                    <div className="col-md-6 me-4">
                      <div className="d-flex flex-column detailProfileleft">
                        <p className={styles.contact}>Contact</p>
                        <label htmlFor="email" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          Email address
                        </label>
                        <input type="email" className={styles.inputProfile} id="email" name="email" value={profile.email} disabled />
                        <label htmlFor="phone" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          Phone Number
                        </label>
                        <input type="text" className={styles.inputProfile} id="phone" name="phone_number" value={profile.phone_number} onChange={(e) => handleInputChanges(e)} />
                        <div className="d-flex flex-row">
                          <p className="col-md-5"></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`d-flex flex-column ${styles.detailProfileright}`}>
                        <p className={styles.biodata}>Biodata</p>
                        <label htmlFor="username" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          Username
                        </label>
                        <input type="text" className={styles.inputProfile} id="username" name="fullname" value={profile.fullname} onChange={(e) => handleInputChanges(e)} />

                        <label htmlFor="city" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          City
                        </label>
                        <input type="text" className={styles.inputProfile} id="city" name="city" value={profile.city} onChange={(e) => handleInputChanges(e)} />

                        <label htmlFor="address" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          Address
                        </label>
                        <input type="text" className={styles.inputProfile} id="address" name="address" value={profile.address} onChange={(e) => handleInputChanges(e)} />

                        <label htmlFor="Postcode" className={`mt-3 ms-3 ${styles.labelForm}`}>
                          Post Code
                        </label>
                        <input type="text" className={styles.inputProfile} id="Postcode" name="zipcode" value={profile.zipcode} onChange={(e) => handleInputChanges(e)} />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 ">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
