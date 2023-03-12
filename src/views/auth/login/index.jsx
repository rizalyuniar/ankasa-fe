import React from "react";
import { useState } from "react";
import style from "../../auth/auth.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import imageLogin1 from "../../../assets/Group 29.png";
import imageLogin2 from "../../../assets/google.png";
import imageLogin3 from "../../../assets/Facebook.png";

const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const toRegister = () => {
    return navigate("/register");
  };

  const toResetPassword = () => {
    return navigate("/forget");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  // const handleSuccess = (data) => {
  //   if (data.data.status === "success") {
  //     const userData = data.data.token;
  //     localStorage.setItem("token", userData.token);
  //     localStorage.setItem("email", JSON.stringify(userData.data.email));
  //     alert("Login Success");

  //     navigate("/");
  //   } else {
  //     alert(data.data.message);
  //   }
  // };
  // dispatch(userLogin(form, handleSuccess));
  // };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-lg-7 col-md-7 d-none d-md-block ${style.imageContainer}`}
          />
          <div className={`col-lg-5 col-md-5 ${style.formContainer}`}>
            <div
              className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 ${style.formBox} text-start`}
            >
              <div className="logo">
                <img src={imageLogin1} width="150px" />
              </div>
              <div className="heading">
                <h1 className="fw-bold mt-4 mb-4">Login</h1>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className={style.formInput}>
                  <input
                    type="text"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={style.formInput}>
                  <input
                    type="password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="text-left mb-3">
                  <button type="submit" className={style.customBtn}>
                    Sign in
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p>Did you forgot your password?</p>
                  <p></p>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className={style.tapBtn}
                    onClick={toResetPassword}
                  >
                    Tap here for reset
                  </button>
                </div>
                <hr className="mt-5" />
                <div className="text-center mt-2">
                  <p>Or sign in with</p>
                </div>
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className={style.socBtn}
                    onClick={toRegister}
                  >
                    <img src={imageLogin2} />
                  </button>
                  <button
                    type="button"
                    className={style.socBtn}
                    onClick={toRegister}
                  >
                    <img src={imageLogin3} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
