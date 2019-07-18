import React from 'react';

import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";


/*CLIENT ROUTES*/

import Navbar from './client/partials/Navbar';
import Footer from "./client/partials/Footer";
import Home from './client/home/Home';
import Homeone from './client/home/Homeone';
import Details from './client/details/Details';
import Cart from './client/cart/Cart';
import Checkout from './client/checkout/Checkout';
import ClientLogin from './client/login-register/ClientLogin';
import ClientRegister from './client/login-register/ClientRegister';

/*ADMIN ROUTES*/
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Category from './admin/Category';
import CategoryForm from './admin/CategoryForm';
import Product from './admin/Product';
import ProductForm from './admin/ProductForm';


function App() {
  return (

      <BrowserRouter>
          <Navbar/>
          <Route path="/" exact component={Homeone} />
          <Route path="/home" exact component={Home} />
          <Route path="/product-details" exact component={Details} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/login" exact component={ClientLogin} />
          <Route path="/register" exact component={ClientRegister} />
          <Footer/>
          {/*admin*/}

          {/*<Route path="/" exact component={Login} />
          <Route path="/category" exact component={Category} />
          <Route path="/category-form" exact component={CategoryForm} />

          <Route path="/product" exact component={Product} />
          <Route path="/product-form" exact component={ProductForm} />*/}
          
          {/*<Route path="/login" exact component={Login} />*/}

          
      </BrowserRouter>

  );
}

export default App;
