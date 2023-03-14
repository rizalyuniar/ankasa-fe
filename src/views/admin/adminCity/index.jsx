import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import ModalUpdateCity from '../../../components/modalUpdateCity';
import style from './city.module.css';

const AdminCity = () => {
  const [city, setCity] = useState([]);
  const [createCity, setCreateCity] = useState({
    name: '',
    country: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    // get data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/city`)
      .then((res) => {
        setCity(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // creaate
  const handleUpload = (e) => {
    setCreateCity((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChange = (e) => {
    setCreateCity({
      ...createCity,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let attr in createCity) {
      formData.append(attr, createCity[attr]);
    }

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/city`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `New City Added`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

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
          .delete(`${process.env.REACT_APP_BACKEND_URL}/city/${id}`)
          .then((response) => {
            Swal.fire(`${response.data.message}`, 'Your file has been deleted.', 'success');
            window.location.reload();
          })
          .catch((err) => alert(`${err.response}`));
      }
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
                      Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Country
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Description
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {city.map((data) => (
                    <>
                      <ModalUpdateCity city={data} />
                      <tr>
                        <td className="align-middle text-center py-3">
                          <img src={data.image} style={{ height: '50px', objectFit: 'cover' }} alt="airline" />
                        </td>
                        <td className={`align-middle text-center ${style.tableColumn}`}>{data.name}</td>
                        <td className={`align-middle text-center ${style.tableColumnWebsite}`}>{data.country}</td>
                        <td className={`align-middle ${style.tableColumnDescription}`}>{data.description}</td>

                        <td className="align-middle text-center">
                          <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#update${data.id}`}>
                            <i className="bi bi-pencil-square" />
                          </button>

                          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(data.id)}>
                            <i className="bi bi-trash-fill" />
                          </button>
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
                <input type="text" name="name" placeholder="Name" value={createCity.name} className={style.input} onChange={handleChange} />
                <input type="text" name="country" placeholder="Country" value={createCity.country} className={style.input} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={createCity.description} className={style.input} onChange={handleChange} />

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

export default AdminCity;
