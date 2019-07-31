import React from 'react';
import { BrowserRouter, Switch ,Route, Link } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'


/*CLIENT ROUTES*/

import Navbar from './client/partials/Navbar';
import Footer from "./client/partials/Footer";
import Home from './client/home/Home';
import Homeone from './client/home/Homeone';
import Details from './client/details/Details';
import Cart from './client/cart/Cart';
import Checkout from './client/checkout/Checkout';
import Payment from './client/checkout/Payment';
import ClientLogin from './client/login-register/ClientLogin';
import ClientRegister from './client/login-register/ClientRegister';
import Account from './client/dashboard/Account';
import Orders from './client/dashboard/Orders';
import Address from './client/dashboard/Address';
import OrderDetails from './client/dashboard/OrderDetails';

import WishList from './client/dashboard/WishList';

/*ADMIN ROUTES*/
// import Login from './admin/Login';
// import Dashboard from './admin/Dashboard';
// import Category from './admin/Category';
// import CategoryForm from './admin/CategoryForm';
// import Product from './admin/Product';
// import ProductForm from './admin/ProductForm';


function App() {

  const isLoggedIn = true;

  return (

      <BrowserRouter>
      <ScrollToTop>
          <Navbar/>
          <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Homeone} />
          <Route path="/product-details" exact component={Details} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/login" exact component={ClientLogin} />
          <Route path="/register" exact component={ClientRegister} />
          <Route path="/account" exact component={Account} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/address" exact component={Address} />
          <Route path="/order-details" exact component={OrderDetails} />
          <Route path="/wishlist" exact component={WishList} />

          </Switch>
          <Footer/> 
        </ScrollToTop>
      </BrowserRouter>

  );
}

export default App;
