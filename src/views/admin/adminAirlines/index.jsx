import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import style from './airlines.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import ModalUpdateAirlines from '../../../components/modalUpdateAirlines';

const Airlines = () => {
  const [getAirLines, setGetAirLines] = useState([]);
  const [airlines, setAirlines] = useState({
    name: '',
    website: '',
    email: '',
    phone_number: '',
    image: '',
  });

  useEffect(() => {
    // get data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/airline`)
      .then((res) => {
        setGetAirLines(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let attr in airlines) {
      formData.append(attr, airlines[attr]);
    }

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/airline`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `New Airlines Added`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  // update
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
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/airline/${id}`)
          .then((response) => {
            Swal.fire(`${response.data.message}`, 'Your file has been deleted.', 'success');
          })
          .catch((err) => alert(`${err.response}`));
      }
    });
    window.location.reload();
  };

  // visibility
  const [availibility, setAvailibility] = useState({
    availability: '',
  });

  let availability = true;

  const handleVisibility = (id) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/airline/${id}/availability`, availibility)
      .then((res) => {
        console.log(res.data);
        // window.location.reload();
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
                      Id
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
                  {getAirLines.map((data) => (
                    <>
                      <ModalUpdateAirlines airline={data} />
                      <tr>
                        <td className="align-middle py-3">
                          <img src={data.image} style={{ height: '25px', objectFit: 'cover' }} alt="airline" />
                        </td>
                        <td className={`align-middle ${style.tableColumn}`}>{data.id}</td>
                        <td className={`align-middle ${style.tableColumn}`}>{data.name}</td>
                        <td className={`align-middle ${style.tableColumnWebsite}`}>
                          <a href={data.website}> {data.website}</a>
                        </td>

                        <td className={`align-middle ${style.tableColumnWebsite}`}>{data.email}</td>
                        <td className={`align-middle ${style.tableColumn}`}>{data.phone_number}</td>

                        <td className="align-middle text-center">
                          <div className="container d-flex gap-1">
                            {data.availability == true ? (
                              <button
                                type="button"
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => {
                                  availability = false;
                                  // setVisibility((prev) => {
                                  //   return { ...prev, availability: false };
                                  // });
                                  handleVisibility(data.id);
                                }}
                              >
                                <i className="bi bi-eye-slash" />
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => {
                                  availability = true;
                                  // setVisibility((prev) => {
                                  //   return { ...prev, availability: true };
                                  // });
                                  handleVisibility(data.id);
                                }}
                              >
                                <i className="bi bi-eye-fill" />
                              </button>
                            )}

                            <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#update${data.id}`}>
                              <i className="bi bi-pencil-square" />
                            </button>

                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(data.id)}>
                              <i className="bi bi-trash-fill" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
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
                Create Airlines
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input type="text" name="name" placeholder="Name" value={airlines.name} className={style.input} onChange={handleChange} />

                <input type="text" name="website" placeholder="Website" value={airlines.website} className={style.input} onChange={handleChange} />

                <input type="email" name="email" placeholder="Email" value={airlines.email} className={style.input} onChange={handleChange} />

                <input type="text" name="phone_number" placeholder="Phone Number" value={airlines.phone_number} className={style.input} onChange={handleChange} />

                <div className="mb-3">
                  <input className="mt-2" type="file" id="formFile" onChange={handleUpload} />
                </div>
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

export default Airlines;
