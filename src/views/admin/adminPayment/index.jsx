import React from 'react';
import Footer from '../../../components/Admin/Footer';
import PageHeading from '../../../components/Admin/PageHeading';
import Sidebar from '../../../components/Admin/Sidebar';
import Topbar from '../../../components/Admin/Topbar';
import style from './payment.module.css';

const AdminPayment = () => {
  let approve = 6;

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
              <PageHeading title="Payment" />

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Username
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Booking Id
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Airline Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Destination
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Time
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Status Payment
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center py-3">Mike Korzovski</td>
                    <td className="align-middle text-center">Garuda Indonesia</td>
                    <td className="align-middle text-center">Garuda Indonesia</td>

                    <td className="align-middle text-center">Jakarta - Bali</td>
                    <td className="align-middle text-center">13:00 - 14:30</td>
                    <td className="align-middle text-center">
                      {approve == 1 ? (
                        <p className={style.statusWaiting}>Waiting Payment</p>
                      ) : approve == 2 ? (
                        <p className={style.statusApprove}>Approve</p>
                      ) : approve == 3 ? (
                        <p className={style.statusPending}>Reject</p>
                      ) : approve == 4 ? (
                        <p className={style.statusCancel}>Cancel</p>
                      ) : approve == 5 ? (
                        <p className={style.statusRefund}>Refund</p>
                      ) : (
                        <p className={style.statusPending}>Expired</p>
                      )}
                    </td>

                    <td className="align-middle text-center">
                      <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#update">
                        <i className="bi bi-check2" />
                      </button>

                      <button className="btn btn-danger btn-sm">
                        <i className="bi bi-x-circle" />
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
    </body>
  );
};

export default AdminPayment;
