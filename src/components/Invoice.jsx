// Invoice.js
import React from 'react';

const Invoice = ({ formData, total, itemList }) => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your Invoice</span>
          </h4>
          <ul className="list-group mb-3">
            {itemList}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total </span>
              <strong>Rp{total}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          {formData ? (
            <address>
              <strong>Name: {formData.name}</strong>
              <br />
              Username: {formData.username}
              <br />
              Email: {formData.email || 'N/A'}
              <br />
              Address: {formData.address}
              <br />
              Detail: {formData.detail}
              <br />
              Province: {formData.province}
              <br />
              City: {formData.city}
              <br />
              Postal Code: {formData.postalCode}
            </address>
          ) : (
            <p>No billing address information available.</p>
          )}

          <h4 className="mb-3">Payment</h4>
          {formData ? <p>Payment Method: {formData.paymentMethod}</p> : <p>No payment information available.</p>}

          {formData?.paymentMethod === 'credit' && (
            <div>
              <p>Name on card: {formData.ccName}</p>
              <p>Credit card number: {formData.ccNumber}</p>
              <p>Expiration: {formData.ccExpiration}</p>
              <p>CVV: {formData.ccCvv}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
