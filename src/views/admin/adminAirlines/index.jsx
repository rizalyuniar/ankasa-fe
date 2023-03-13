import React, { useState } from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import imgAirline from '../../../assets/airline.png';
import style from './airlines.module.css';

const Airlines = () => {
  const [hide, setHide] = useState(false);
  const [getAirLines, setGetAirLines] = useState([]);
  const [airlines, setAirlines] = useState({
    name: '',
    website: '',
    email: '',
    phone_number: '',
    image: '',
  });

  const { id, name, website, email, phone_number, image } = getAirLines;

  const [airlineUpdate, setAirlineUpdate] = useState({
    name: name,
    website: website,
    email: email,
    phone_number: phone_number,
    image: image,
  });

  // creaate
  const handleUpload = (e) => {
    setAirlines((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChange = (e) => {
    setAirlines({
      ...airlines,
      [e.target.name]: e.target.value,
    });
  };

  // update
  const handleUploadUpdate = (e) => {
    setAirlineUpdate((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChangeUpdate = (e) => {
    setAirlineUpdate({
      ...airlineUpdate,
      [e.target.name]: e.target.value,
    });
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
              <PageHeading title="Airlines" />

              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
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
                      Website
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
                      <img src={imgAirline} style={{ height: '50px', objectFit: 'cover' }} alt="airline" />
                    </td>
                    <td className="align-middle text-center">Garuda Indonesia</td>
                    <td className="align-middle text-center">www.garudaindonesia.com</td>

                    <td className="align-middle text-center">cs@garudaindonesia.com</td>
                    <td className="align-middle text-center">021-8445521</td>
                    <td className="align-middle text-center">
                      {hide ? (
                        <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => setHide(false)}>
                          <i className="bi bi-eye-fill" />
                        </button>
                      ) : (
                        <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => setHide(true)}>
                          <i className="bi bi-eye-slash" />
                        </button>
                      )}

                      <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#update">
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
                <input type="text" name="name" placeholder="Name" value={airlines.name} className={style.input} onChange={handleChange} />

                <input type="text" name="website" placeholder="Website" value={airlines.website} className={style.input} onChange={handleChange} />

                <input type="email" name="email" placeholder="Email" value={airlines.email} className={style.input} onChange={handleChange} />

                <input type="text" name="phone_number" placeholder="Phone Number" value={airlines.phone_number} className={style.input} onChange={handleChange} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={airlines.image} onChange={handleUpload} />
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
                <input type="text" name="name" placeholder="Name" value={airlineUpdate.name} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="website" placeholder="Website" value={airlineUpdate.website} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="email" placeholder="Email" value={airlineUpdate.email} className={style.input} onChange={handleChangeUpdate} />

                <input type="text" name="phone_number" placeholder="Phone Number" value={airlineUpdate.phone_number} className={style.input} onChange={handleChangeUpdate} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" value={airlineUpdate.image} onChange={handleUploadUpdate} />
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
