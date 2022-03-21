import React, { useEffect, useState } from 'react';

function NotGoodResponse() {

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
    <div className="card h-100 justify-content-center" style={{backgroundColor: "red", color: "white"}}>
      <div className="row g-0">
          <div className="col-md-4">
          <img src="https://images.assetsdelivery.com/compings_v2/photoart23d/photoart23d1902/photoart23d190201421.jpg" style={{maxHeight:"310px"}} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Wrong !</h5>
            <p className="card-text">You not have the good response, click for restart !</p>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default NotGoodResponse;
