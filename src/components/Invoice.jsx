import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import GetAddress from '../api/GetAddress';

const Invoice = () => {
  const [addressData, setAddressData] = useState([]);
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const newAddressData = await GetAddress();
        setAddressData(newAddressData);
      } catch (error) {
        console.error('Error fetching data from API: ', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const calculateTotal = () => {
    return state.reduce((total, cartItem) => total + cartItem.price, 0);
  };

  const invItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={`http://localhost:3300/image/${cartItem.image}`} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <ul className="col-md-4">
              <div>{cartItem.name}</div>
              <div className="lead fw-bold">Rp{cartItem.price}</div>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const totalSection = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <h4>Address</h4>
              <div className="address-box">
                {addressData.map((addressItem) => (
                  <div key={addressItem.id}>
                    {addressItem.address}, {addressItem.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h4>Total</h4>
              <h2 className="lead fw-bold">Rp{calculateTotal()}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Invoice is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && totalSection()}
      {state.length !== 0 && state.map(invItems)}
    </>
  );
};

export default Invoice;
