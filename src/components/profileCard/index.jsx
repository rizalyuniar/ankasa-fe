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
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setProfile(res.data.data);
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
                <img width={120} height={120} src={profile.image} />
              </div>

              <div className="d-flex flex-column align-items-center my-3">
                <h2>{profile.fullname}</h2>
                <p>{profile.city}</p>
              </div>
              <div>
                <h5>Cards</h5>
                <h5 className={styles.add}>+ Add</h5>
              </div>
              <div className={` ${styles.xcard} px-4`}>
                <div>
                  <h5 className={styles.numCard}>4441 1235 5512 5551</h5>
                </div>
                <div>
                  <p className={styles.cardX}>X Card </p>
                  <p className={styles.xMoney}>$ 1,440.2 </p>
                </div>
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
                  {' '}
                  Logout{' '}
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
