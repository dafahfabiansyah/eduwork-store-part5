import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import GetProduct from '../api/GetProduct';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productData = await GetProduct();
        const filteredProduct = productData.find((item) => item.id === id);
        setProduct(filteredProduct || {});
      } catch (error) {
        console.error('Error fetching product details from API: ', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleCart = () => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.name} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.description}</p>
            <button onClick={handleCart} className="btn btn-outline-primary my-5">
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
