import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (login, router, setLoading) => async (dispacth) => {
  try {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, login)
      .then((res) => {
        console.log(res);
        if (res.data.message !== 'login is successful') {
          Swal.fire({
            icon: 'error',
            title: `${res.data.message}`,
            text: 'Something went wrong!',
          });
        } else {
          Swal.fire(`${res.data.message}`, 'You clicked the button!', 'success');
          const token = res.data.data.token;
          const id = res.data.data.id;
          const fullname = res.data.data.fullname;
          const email = res.data.data.email;
          const phone_number = res.data.data.phone_number;
          const image = res.data.data.image;

          localStorage.setItem('token', token);
          localStorage.setItem('users', JSON.stringify(res.data.data));
          localStorage.setItem('id', id);
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('email', email);
          localStorage.setItem('phone_number', phone_number);
          localStorage.setItem('image', image);
          router('/');
        }
      })
    dispacth({ type: "USER_LOGIN_SUCCESS", payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
    setLoading(false);
  }
};

export const registerUser = (register, router, setLoading) => async (dispacth) => {
  try {
    axios
      .post('https://ankasa-backend-production.up.railway.app/user/register', register)
      .then((res) => {
        console.log(res);
        if (res.data.message !== 'Register has been success') {
          Swal.fire({
            icon: 'error',
            title: `${res.data.message}`,
            text: 'Something went wrong!',
          });
        } else {
          Swal.fire(`${res.data.message}`, 'You clicked the button!', 'success');
          router('/login');
        }
      }).catch((err) =>
        Swal.fire({
          icon: 'error',
          title: `${err.response.message}`,
          text: 'Something went wrong!',
        })
      );
    dispacth({ type: "USER_REGISTER_SUCCESS", payload: 'success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
    setLoading(false);
  }
};