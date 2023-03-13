import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import style from './style.module.css';

const ModalUpdateCity = ({ city }) => {
  const [updateCity, setUpdateCity] = useState({
    name: city.name,
    country: city.country,
    image: city.image,
  });

  // update
  const handleUpload = (e) => {
    setUpdateCity((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };
  const handleChangeUpdate = (e) => {
    setUpdateCity({
      ...updateCity,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let attr in updateCity) {
      formData.append(attr, updateCity[attr]);
    }
    axios
      .put(`${process.env.REACT_APP_API}/city/${city.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `City Updated`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(`${err.response}`);
      });
  };
  return (
    <div className="modal fade" id={`update${city.id}`} tabIndex={-1} aria-labelledby="updateLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateLabel">
              Update Airlines
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input type="text" name="name" placeholder="Name" value={updateCity.name} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="country" placeholder="Country" value={updateCity.country} className={style.input} onChange={handleChangeUpdate} />

              <div className="mb-3">
                <input className="mt-2" type="file" id="formFile" onChange={handleUpload} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateCity;
