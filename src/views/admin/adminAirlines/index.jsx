import React from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import imgAirline from '../../../assets/airline.png';
import style from './airlines.module.css';
import FormInputProfile from '../../../components/FormInputProfile';

const Airlines = () => {
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
              <PageHeading title="Airlines" />

              <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
                Add Airlines
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Images
                    </th>
                    <th scope="col" className="align-middle text-center">
                      Airlines Name
                    </th>
                    <th scope="col" className="align-middle text-center">
                      Email
                    </th>
                    <th scope="col" className="align-middle text-center">
                      No Telpon
                    </th>
                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center py-3">
                      <img src={imgAirline} style={{ width: '70px', height: '50px', objectFit: 'cover' }} alt="airline" />
                    </td>
                    <td className="align-middle text-center">Garuda Indonesia</td>
                    <td className="align-middle text-center">cs@garudaindonesia.com</td>
                    <td className="align-middle text-center">021-8445521</td>
                    <td className="align-middle text-center">
                      <button type="button" className="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#update">
                        <i className="bi bi-pencil-square" />
                      </button>

                      <button className="btn btn-danger btn-sm">
                        <i className="bi bi-trash-fill" />
                      </button>
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
                Create Airlines
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form action="">
              <div className="modal-body">
                <input type="text" name="name" placeholder="Name" value={''} className={style.input} />

                <input type="text" name="email" placeholder="Email" value={''} className={style.input} />

                <input type="text" name="phone_number" placeholder="Phone Number" value={''} className={style.input} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={''} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Moodal Update*/}
      <div className="modal fade" id="update" tabIndex={-1} aria-labelledby="updateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateLabel">
                Update Airlines
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form action="">
              <div className="modal-body">
                <input type="text" name="name" placeholder="Name" value={''} className={style.input} />

                <input type="text" name="email" placeholder="Email" value={''} className={style.input} />

                <input type="text" name="phone_number" placeholder="Phone Number" value={''} className={style.input} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={''} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Airlines;
