import React, { useState } from 'react';

const Track = ({ productData }) => {
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
          {productData && (
            <div>
              <h5>Product Details:</h5>
              <ul>
                {productData.map((product, index) => (
                  <li key={index}>
                    <strong>Product:</strong> {product.name}, <strong>Quantity:</strong> {product.quantity}, <strong>Price:</strong> ${product.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Track;
