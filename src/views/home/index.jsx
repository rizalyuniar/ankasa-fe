import React from 'react';
import Navbar from '../../components/navbar';
import style from './style.module.css';
import accsent1 from '../../assets/bali.jpg';
import accsent2 from '../../assets/agra.jpg';
import imgTrend from '../../assets/bali.jpg';
import { Link } from 'react-router-dom';
import CardTrending from '../../components/cardTrending';
import CardCarousel from '../../components/cardCarousel';

import Footer from '../../components/footer';

const index = () => {
  return (
    <body className={style.body}>
      <Navbar />
      <div className={`container-fluid position-relative vh-100 ${style.containerFluid}`}>
        <img src={accsent1} alt="" className={style.accsent1} />
        <img src={accsent2} alt="" className={style.accsent2} />
        <div className="container">
          <div className={`row ${style.row}`}>
            <div className="col-md-12 col-lg-6">
              <h1 className={style.title}>
                Find your <span className={style.spanHero}>Flight</span>
              </h1>
              <span className={style.subtitle}>and explore the world with us </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="row">
          <span className={style.subtitle}>Trending</span>
          <div className={style.wrapper}>
            <h3 className={style.titleHeader}>Trending Destinations</h3>
            <button className={style.viewMore} onClick={() => window.location.replace('/destination')}>
              View All
            </button>
          </div>
        </div>

        <div className={`row mt-3 ${style.rowTrending}`}>
          <div className="col-md-3 col-sm-6">
            <CardTrending count="22" city="Bali" nation="Indonesia" image={imgTrend} id="1" />
          </div>
          <div className="col-md-3 col-sm-6">
            <CardTrending count="22" city="Tokyo" nation="Japan" image={accsent2} id="2" />
          </div>
          <div className="col-md-3 col-sm-6">
            <CardTrending count="22" city="Tokyo" nation="Japan" image={imgTrend} id="3" />
          </div>
          <div className="col-md-3 col-sm-6">
            <CardTrending count="22" city="Tokyo" nation="Japan" image={imgTrend} id="4" />
          </div>
        </div>
      </div>

      <div className={`container text-center ${style.rowTop}`}>
        <div className={`row`}>
          <span className={style.subtitleTop}>Top 10</span>
          <p className={style.titelHeadTop}>Top 10 destinations</p>
        </div>

        <div className="container ">
          <div className={`row text-center ${style.rowCarousel}`}>
            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>

            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>

            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>

            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>

            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>

            <div className="col-lg-2 col-sm-6">
              <CardCarousel />
            </div>
          </div>
          <div className={style.wrapperButton}>
            <button className={style.arrowLeft}>
              <i className="bi bi-chevron-left" />
            </button>
            <button className={style.arrowLeft}>
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>
        {/* <img src={accsentFlight} alt="" className={style.accsentFlight} /> */}
      </div>
      <Footer />
    </body>
  );
};

export default index;
