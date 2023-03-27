import style from './detail.module.css';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import iconChange from '../../assets/Vector.png';
import imageGaruda from '../../assets/airline.png';
import img from '../../assets/bali.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailDestination = () => {
  const [city, setCity] = useState([]);
  console.log(city);
  const { id } = useParams();
  useEffect(() => {
    // get city
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/city/${id}`)
      .then((res) => {
        setCity(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <body className={style.body}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 mb-4">
            <img src={city.image} alt="img" className={style.imgDestination} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-2">
            <div className={style.wrapperCard}>
              <div className={style.wrapperAirlines}>
                <h3 className={style.titleHeading}>{city.name}</h3>
                <span className={style.subHeading}>{city.country}</span>
                <h4 className="mt-4">The Land of The God</h4>
                <p className={style.bottom}>{city.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className={style.wrapperCard}>
              <div className={style.wrapperAirlines}>
                <img src={imageGaruda} alt="imageCard" className={style.mgCard} />
                <p className={style.titleCard}>Garuda Indonesia</p>

                <div className={style.wrapper}>
                  <div className={`${style.wrapperDestination}`}>
                    <span type="text" className={style.fromDestination}>
                      Jakarta
                    </span>

                    <button type="button" className={style.buttonChange}>
                      <img src={iconChange} alt="" />
                    </button>

                    <span type="text" className={style.fromDestination}>
                      Bali
                    </span>
                  </div>

                  <div className={style.wrapperSchedule}>
                    <span className={style.timer}>13:00 - 14:30</span>
                    <p className={`mb-0 ${style.transit}`}>1 Transit</p>
                  </div>

                  <div className={style.wrapperFacility}>
                    <i class="bi bi-wifi" />
                    <i class="bi bi-briefcase-fill" />
                    <i class="bi bi-cup-hot-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default DetailDestination;
