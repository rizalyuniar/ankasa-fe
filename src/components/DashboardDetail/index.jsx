import React from 'react';

const DashboardDetail = (props) => {
  return (
    <div className={`card ${props.accsent} shadow h-100 py-2 px-3`}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col me-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.count}</div>
          </div>
          <div className="col-auto">
            <i className={`${props.icon} fa-2x text-gray-300`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
