import React, { useState } from 'react';
import style from './style.module.css';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import axios from 'axios';
import Swal from 'sweetalert2';

const MenuSetting = () => {
  const [menu, setMenu] = useState({
    admin_status: false,
    airline_crud: false,
    flight_crud: false,
    booking_crud: false,
    city_crud: false,
  });

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/register`, menu, {
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
              <PageHeading title="Menu Setting" />

              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
                Add Admin
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Menu Airline
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Menu Flight
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Menu Booking
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Menu City
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <ModalUpdateAirlines airline={data} /> */}

                  <tr>
                    <td className={`text-center align-middle ${style.tableColumn}`}>admin</td>
                    <td className={`text-center align-middle ${style.tableColumn}`}>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td className={`text-center align-middle ${style.tableColumn}`}>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td className={`text-center align-middle ${style.tableColumn}`}>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td className={`text-center align-middle ${style.tableColumn}`}>
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
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
                <input type="text" name="fullname" placeholder="Name" value={menu.fullname} className={style.input} onChange={handleChange} />

                <input type="email" name="email" placeholder="Email" value={menu.email} className={style.input} onChange={handleChange} />

                <input type="password" name="password" placeholder="Email" value={menu.password} className={style.input} onChange={handleChange} />
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

export default MenuSetting;
