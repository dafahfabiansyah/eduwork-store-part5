import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import GetProduct from '../api/GetProduct';

const Product = () => {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const newProductData = await GetProduct();
        setProductData(newProductData);
      } catch (error) {
        console.error('Error fetching data from API: ', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleCart = (product, cartBtn, setCartBtn) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  const CardItem = ({ item }) => {
    const [cartBtn, setCartBtn] = useState('Add to Cart');

    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: '18rem' }}>
        <img src={`http://localhost:3300/image/${item.image}`} className="card-img-top" alt={item.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="lead">Rp.{item.price}</p>
          <p className="lead">{item.description}</p>
          <button onClick={() => handleCart(item, cartBtn, setCartBtn)} className="btn btn-outline-primary my-5">
            {cartBtn}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {productData.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
