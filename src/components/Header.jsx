import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
import Signup from './buttons/Signup';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="dropdown">
            <a class="btn btn-outline-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </a>

            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Electronic
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Food
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Drink
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/track">
                  Track
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/invoice">
                  Invoice
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              tokopaedi
            </NavLink>
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
