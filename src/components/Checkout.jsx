import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const state = useSelector((state) => state.addItem);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    detail: '',
    province: '',
    city: '',
    postal_code: '',
    // paymentMethod: 'credit',
    // ccName: '',
    // ccNumber: '',
    // ccExpiration: '',
    // ccCvv: '',
  });

  let total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">Rp.{item.price}</span>
      </li>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform data validation if needed

    try {
      const response = await fetch('http://localhost:3300/address', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Data sent successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total </span>
                <strong>Rp{total}</strong>
              </li>
            </ul>

            {/* <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form> */}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="name" placeholder="Username" required="" />
                    <div className="invalid-feedback">Your Name is required.</div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                    <div className="invalid-feedback">Your username is required.</div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">Please enter a valid email address htmlFor shipping updates.</div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">Please enter your shipping address.</div>
                </div>
                <div className="col-12">
                  <label htmlFor="detail" className="form-label">
                    Detail
                  </label>
                  <input type="text" className="form-control" id="detail" placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">Too Short</div>
                </div>
                <div className="col-md-5">
                  <label htmlFor="province" className="form-label">
                    Province
                  </label>
                  <input type="text" className="form-control" id="province" placeholder="" required="" />
                  <div className="invalid-feedback">Province required.</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="city" placeholder="" required="" />
                  <div className="invalid-feedback">City required.</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="postal_code" className="form-label">
                    Postal Code
                  </label>
                  <input type="text" className="form-control" id="postal-code" placeholder="" required="" />
                  <div className="invalid-feedback">Postal Code required.</div>
                </div>
              </div>

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">Name on card is required</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                  <div className="invalid-feedback">Credit card number is required</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                  <div className="invalid-feedback">Expiration date required</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleChange}>
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
