import React from 'react';
import { BrowserRouter, Switch ,Route, Link } from "react-router-dom";


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

  const isLoggedIn = true;

  return (

      <BrowserRouter>
          <Navbar/>
          <Switch>
          <Route path="/" exact component={Homeone} />

          <Route path="/home" exact component={Home} />
          <Route path="/product-details" exact component={Details} />

          <Route path="/cart" exact component={Cart} />
          
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/register" exact component={ClientRegister} />
          <Route path="/login" exact component={ClientLogin} />
          

          

          

          </Switch>
          <Footer/> 
          
      </BrowserRouter>

  );
}

export default App;
