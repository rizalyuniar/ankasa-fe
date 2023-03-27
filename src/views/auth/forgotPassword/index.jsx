import React, { useState } from "react";
import "../../auth/auth.module.css";
import imageForgot1 from "../../../assets/Group 29.png";
import style from "../../auth/auth.module.css";

const ForgetPassword = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    email: localStorage.getItem("email"),
    password: "",
  });

  // useEffect(() => {
  //   const email = localStorage.getItem("email");
  //   if (!email) {
  //     alert("Please find your email");
  //     return navigate("/forget");
  //   }
  // }, []);

  // const [confirmPassword, setConfirmPassword] = useState("");
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.password !== confirmPassword) {
  //     alert("Password is not match");
  //   } else {
  //     const handleSuccess = (data) => {
  //       alert("Password has been updated");
  //       return navigate("/login");
  //     };
  // dispatch(changePassword(form, handleSuccess));
  //   }
  // };
  return (
    <section>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              className={`col-lg-7 col-md-7 d-none d-md-block ${style.imageContainer}`}
            />
            <div className={`col-lg-5 col-md-5 ${style.formContainer}`}>
              <div
                className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 ${style.formBox} text-start`}
              >
                <div className={`mt-3 ${style.logo}`}>
                  <img src={imageForgot1} width="150px" />
                </div>
                <div className={style.heading}>
                  <h1 className="fw-bold">Reset Password</h1>
                </div>
                {/* <form onSubmit={(e) => onSubmit(e)}> */}
                <div className={style.formInput}>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    id="password"
                    placeholder="New Password"
                    required
                  />
                </div>
                <div className={style.formInput}>
                  <input
                    type="password"
                    name="password2"
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    id="password2"
                    placeholder="Confirm New Password"
                    required
                  />
                </div>
                <div className="text-left mb-3 mt-5">
                  <button type="submit" className={style.customBtn}>
                    Sign in
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p></p>
                  <p></p>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
