import { useState } from 'react';
import style from '../../auth/auth.module.css';
import { useNavigate } from 'react-router-dom';
import imageRegister1 from '../../../assets/Group 29.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/action/userAction';

export default function Register() {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(register, router));
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-7 col-md-7 d-none d-md-block ${style.imageContainer}`} />
          <div className={`col-lg-5 col-md-5 ${style.formContainer}`}>
            <div className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 ${style.formBox} text-start`}>
              <div className="logo">
                <img src={imageRegister1} width="150px" />
              </div>
              <div className="heading">
                <h1 className="fw-bold mt-4 mb-4">Register</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={style.formInput}>
                  <input type="text" name="fullname" onChange={(e) => setRegister({ ...register, fullname: e.target.value })} id="fullname" placeholder="fullname" required />
                </div>
                <div className={style.formInput}>
                  <input type="email" name="email" onChange={(e) => setRegister({ ...register, email: e.target.value })} id="email" placeholder="Email" required />
                </div>
                <div className={style.formInput}>
                  <input type="password" name="password" onChange={(e) => setRegister({ ...register, password: e.target.value })} id="password" placeholder="Password" required />
                </div>
                <div className="text-left mb-3">
                  <button type="submit" className={style.customBtn}>
                    Sign up
                  </button>
                </div>
                <div className="text-left mt-3">
                  <input className="me-2" type="checkbox" id="cb1" />
                  <label htmlFor="cb1">Accept terms and condition</label>
                </div>
                <hr className="mt-5" />
                <div className="text-center mt-2">
                  <p>Already have an account?</p>
                  <p></p>
                </div>
                <div className="text-left mb-3">
                  <button type="submit" className={style.signBtn}>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
