import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import ProfileCard from "../../components/profileCard";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const Profile = () => {
  return (
    <>
      <Navbar />
      <main className="bodycontent">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="leftside">
                <ProfileCard />
              </div>
            </div>
            <div className="col-md-8">
              <div className={`d-flex flex-column ${styles.rightsideProfile}`}>
                <p className={styles.title}>P R O F I L E</p>
                <p className={styles.subtitle}>Profile: Iqbal Apredo</p>
                <form>
                  <div className="d-flex flex-column flex-md-row my-4 detailProfile">
                    <div className="col-md-6 me-4">
                      <div className="d-flex flex-column detailProfileleft">
                        <p className={styles.contact}>Contact</p>
                        <label
                          htmlFor="email"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className={styles.inputProfile}
                          id="email"
                        />
                        <label
                          htmlFor="phone"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="phone"
                        />
                        <div className="d-flex flex-row">
                          <p className="col-md-5"></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={`d-flex flex-column ${styles.detailProfileright}`}
                      >
                        <p className={styles.biodata}>Biodata</p>
                        <label
                          htmlFor="username"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="username"
                        />

                        <label
                          htmlFor="city"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="city"
                        />

                        <label
                          htmlFor="address"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="address"
                        />

                        <label
                          htmlFor="Postcode"
                          className={`mt-3 ms-3 ${styles.labelForm}`}
                        >
                          Post Code
                        </label>
                        <input
                          type="text"
                          className={styles.inputProfile}
                          id="Postcode"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <button type="submit" className="btn btn-primary mt-3 ">
                  Save
                </button>
                <button className="btn btn-primary mt-3 btn-danger">
                  Delete
                </button>
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
