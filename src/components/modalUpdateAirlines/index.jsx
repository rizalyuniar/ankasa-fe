import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import style from './style.module.css';

const ModalUpdateAirlines = ({ airline }) => {
  const [getAirline, setGetAirline] = useState({
    name: airline.name,
    email: airline.email,
    website: airline.website,
    phone_number: airline.phone_number,
    image: airline.image,
  });

  const handleUploadUpdate = (e) => {
    setGetAirline((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChangeUpdate = (e) => {
    setGetAirline({
      ...getAirline,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let attr in getAirline) {
      formData.append(attr, getAirline[attr]);
    }

    axios
      .put(`${process.env.REACT_APP_API}/airline/${airline.id}`, formData, {
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
      .catch((err) => {
        console.log(err);
        alert(`${err.response}`);
      });
  };
  return (
    <div className="modal fade" id={`update${airline.id}`} tabIndex={-1} aria-labelledby="updateLabel" aria-hidden="true">
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
              <input type="text" name="name" placeholder="Name" value={getAirline.name} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="website" placeholder="Website" value={getAirline.website} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="email" placeholder="Email" value={getAirline.email} className={style.input} onChange={handleChangeUpdate} />

              <input type="text" name="phone_number" placeholder="Phone Number" value={getAirline.phone_number} className={style.input} onChange={handleChangeUpdate} />

              <div className="mb-3">
                <input className="mt-2" type="file" id="formFile" onChange={handleUploadUpdate} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateAirlines;
