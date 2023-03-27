import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import ModalUpdateAirlines from '../../../components/modalUpdateAirlines';

const Users = () => {
  const [allAdmin, setAllAdmin] = useState([]);
  const [createAdmin, setCreateAdmin] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  // hide
  const [hide, setHide] = useState({
    availability: 'false',
  });

  const [availibility, setAvailibility] = useState({
    availability: 'true',
  });

  const handleChange = (e) => {
    setCreateAdmin({
      ...createAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/register`, createAdmin, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Admin Created`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleHide = (id) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/hide`, hide, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleVisibility = (id) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/hide`, availibility, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log('success');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllAdmin(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // axios
        //   .delete(`${process.env.REACT_APP_BACKEND_URL}/airline/${id}`, {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('token')}`,
        //     },
        //   })
        //   .then((response) => {
        //     Swal.fire(`${response.data.message}`, 'Your file has been deleted.', 'success');
        //   })
        //   .catch((err) => alert(`${err.response}`));
      }
    });
    window.location.reload();
  };

  return (
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            <div className="container-fluid px-4">
              <PageHeading title="All Users" />

              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
                Add Admin
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Fullname
                    </th>

                    <th scope="col" className="align-middle text-center">
                      email
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Phone
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Role
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <ModalUpdateAirlines airline={data} /> */}

                  {allAdmin.map((data) => (
                    <tr>
                      <td className={`text-center align-middle ${style.tableColumn}`}>{data.fullname}</td>
                      <td className={`text-center align-middle ${style.tableColumn}`}>{data.email}</td>
                      <td className={`text-center align-middle ${style.tableColumn}`}>087880724123</td>
                      <td className={`text-center align-middle ${style.tableColumn}`}>{data.admin_role}</td>

                      <td className="align-middle text-center">
                        <div className="container ">
                          <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#update${''}`}>
                            <i className="bi bi-pencil-square" />
                          </button>
                          {data.admin_role === 'super_admin' ? (
                            <button className="btn btn-danger btn-sm d-none" onClick={() => handleDelete()}>
                              <i className="bi bi-trash-fill" />
                            </button>
                          ) : data.availability === 'true' ? (
                            <button
                              type="button"
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                handleHide(data.id);
                              }}
                            >
                              <i className="bi bi-eye-slash" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                handleVisibility(data.id);
                              }}
                            >
                              <i className="bi bi-eye-fill" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>

      {/* Moodal Create*/}
      <div className="modal fade" id="create" tabIndex={-1} aria-labelledby="createLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createLabel">
                Create Admin
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input type="text" name="fullname" placeholder="Name" value={createAdmin.fullname} className={style.input} onChange={handleChange} />

                <input type="email" name="email" placeholder="Email" value={createAdmin.email} className={style.input} onChange={handleChange} />

                <input type="password" name="password" placeholder="Email" value={createAdmin.password} className={style.input} onChange={handleChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>

                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Users;
