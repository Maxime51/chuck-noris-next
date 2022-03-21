import React, { useEffect, useState } from 'react';
import Image from 'next/image'

function GoodResponse() {
  return (
    <div className="card h-100 justify-content-center" style={{marginTop:"200px",backgroundColor: "green", color: "white"}}>
      <div className="row g-0">
          <div className="col-md-4">
          <Image src="https://images.assetsdelivery.com/compings_v2/photoart23d/photoart23d1902/photoart23d190201464.jpg" alt="" className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Good !</h5>
            <p className="card-text">You have the good response, click for next question !</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodResponse;
