import style from './detail.module.css';
import React from 'react';
import Navbar from '../../components/navbar';
import img from '../../assets/bali.jpg';
import Footer from '../../components/footer';
import iconChange from '../../assets/Vector.png';

const DetailDestination = () => {
  return (
    <body className={style.body}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5">
            <img src={img} alt="img" className={style.imgDestination} />
          </div>
        </div>

        <div className="row">
          <h3 className={style.titleHeading}>Bali</h3>
          <span className={style.subHeading}>Indonesia</span>

          <div className="col-md-6">
            <div className={style.wrapperCard}>
              <div className={style.wrapperAirlines}>
                <img src="" alt="imageCard" className={style.mgCard} />
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
