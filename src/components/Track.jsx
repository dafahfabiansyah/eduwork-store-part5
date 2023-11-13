// Track.js
import React, { useState } from 'react';

const Track = () => {
  const [paymentStatus] = useState('pending'); // 'pending' or 'completed'
  const [packageStatus] = useState('packing'); // 'packing' or 'shipped'

  return (
    <div className="container my-5">
      <div className="row g-5">
        <div className="col-md-8">
          <h4 className="mb-3">Track Your Order</h4>
          <div>
            <strong>Payment Status:</strong> {paymentStatus === 'completed' ? 'Completed' : 'Pending'}
          </div>
          <div>
            <strong>Package Status:</strong> {packageStatus === 'shipped' ? 'Shipped' : 'Packing'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
