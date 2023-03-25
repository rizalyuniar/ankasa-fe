import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import iconprofile from '../../assets/user.png';
import iconstar from '../../assets/myreview.svg';
import iconsettings from '../../assets/setting.svg';
import iconlogout from '../../assets/logout.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CreditCard from '../CreditCard';

const ProfileCard = () => {
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
      <section className={styles.profilecard}>
        <div className="container">
          <div className="row">
            <div className={styles.cardProfile}>
              <div className={`d-flex flex-row justify-content-center my-3 px-5 ${styles.picProfile}`}>
                <img width={120} height={120} style={{ objectFit: 'cover' }} src={profile.image} />
              </div>

              <div className="d-flex flex-column align-items-center my-3">
                <h2>{profile.fullname}</h2>
                <p>{profile.city}</p>
              </div>

              {/* credit card */}
              <div className="px-3">
                <CreditCard creditCard={creditCard} currency={currency} />
              </div>

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

                <p onClick={() => window.location.replace(`/updateProfile/${idUser}`)} className={`mx-5 ${styles.textSettings}`} style={{ cursor: 'pointer' }}>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
