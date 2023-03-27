import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import styles from './style.module.css';

const CreditCard = (props) => {
  const [createCredit, setCreateCredit] = useState({
    fullname: '',
    credit_number: '',
    expire: '',
    cvv: '',
    balance: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCreateCredit({
      ...createCredit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/creditCard`, createCredit, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.data.message !== 'Credit Card created') {
          Swal.fire({
            icon: 'error',
            title: `${res.data.message}`,
            text: 'Something went wrong!',
          });
        } else {
          Swal.fire(`${res.data.message}`, 'You clicked the button!', 'success');
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          .delete(`${process.env.REACT_APP_BACKEND_URL}/creditCard/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((response) => {
            console.log(response);
            Swal.fire(`${response.data.message}`, 'Credit Card Deleted!', 'success');

            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert(`${err.response}`);
          });
      }
    });
  };

  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold fs-sm-5">Cards</h5>
        <button type="button" className={styles.buttonAddCard} data-bs-toggle="modal" data-bs-target="#modalAdd">
          + Add
        </button>
      </div>

      <div className={`${styles.xcard}`}>
        {props.creditCard?.length < 1 ? (
          <>
            <div>
              <h5 className={styles.numCard}>Please, Add Your Credit Card!</h5>
            </div>
          </>
        ) : (
          props.creditCard?.map((credit) => (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className={`fw-bolder ${styles.nameCredit}`}>{credit.fullname}</h5>
                <button type="button" className={`${styles.btnDelete}`} onClick={() => handleDelete(credit.id)}>
                  <i className="bi bi-trash3" />
                </button>
              </div>
              <div>
                <h5 className={styles.numCard}>{credit.length < 1 ? '4411 4411 5423 6544' : credit.credit_number}</h5>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className={styles.cardX}>10 / 24</p>
                <p className={`fw-bolder ${styles.xMoney}`}>{currencyFormat(props.currency)}</p>
              </div>
            </>
          ))
        )}
      </div>

      <div className="modal fade" id="modalAdd" tabIndex={-1} aria-labelledby="modalAddLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalAddLabel">
                Create Credit Card
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input type="text" className={styles.formInputAdd} name="fullname" placeholder="Bank Name" onChange={handleChange} />
                <input type="text" className={styles.formInputAdd} name="credit_number" placeholder="Credit Card Number" onChange={handleChange} />
                <input type="date" className={styles.formInputAdd} name="expire" placeholder="Expired Date" onChange={handleChange} />
                <input type="text" className={styles.formInputAdd} name="cvv" placeholder="CVV" onChange={handleChange} />
                <input type="text" className={styles.formInputAdd} name="balance" placeholder="Balance (Rp. )" onChange={handleChange} />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
