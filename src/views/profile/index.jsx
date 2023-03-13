import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import ProfileCard from "../../components/profileCard/index";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Arrowright from "../../assets/btnbackright.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("users"));
  const id = data.id;
  // get user
  const [profile, setProfile] = useState({
    id: "",
    email: "",
    fullname: "",
    phone_number: "",
    city: "",
    address: "",
    zipcode: "",
    image: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
                <p className={styles.subtitle}>Profile</p>

                <div className="d-flex flex-column flex-md-row my-4 detailProfile">
                  <div className="col-md-6 me-4">
                    <div className="d-flex flex-column detailProfileleft">
                      <p className={styles.contact}>Contact</p>
                      <label
                        for="email"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className={styles.inputProfile}
                        name="email"
                        value={profile.email}
                      />
                      <label
                        for="phone"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className={styles.inputProfile}
                        value={profile.phone_number}
                      />
                      <div className="d-flex flex-row">
                        <p className="col-md-5"></p>
                        <p className={`mt-3  ${styles.accountSettings}`}>
                          Account Settings
                        </p>
                        <img src={Arrowright} className={styles.iconArrow} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={`d-flex flex-column ${styles.detailProfileright}`}
                    >
                      <p className={styles.biodata}>Biodata</p>
                      <label
                        for="username"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className={styles.inputProfile}
                        value={profile.fullname}
                      />
                      <label
                        for="city"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className={styles.inputProfile}
                        value={profile.city}
                      />
                      <label
                        for="address"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        {" "}
                        Address{" "}
                      </label>
                      <input
                        type="text"
                        className={styles.inputProfile}
                        value={profile.address}
                      />
                      <label
                        for="Postcode"
                        className={`mt-3 ms-3 ${styles.labelForm}`}
                      >
                        Post Code
                      </label>
                      <input
                        type="text"
                        className={styles.inputProfile}
                        value={profile.zipcode}
                      />
                    </div>
                  </div>
                </div>
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
