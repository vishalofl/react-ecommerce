import React from 'react';
import { Link } from "react-router-dom";

function ClientLogin() {
    	


    	return (

            <div>
            <div className="container-fluid details_page">
                <div className="row bg-white py-5 row-flex">
                    <div className="col-lg-12 mb-5">
                    	<h3 className="text-center">ALREADY REGISTERED?</h3>
                    </div>

                    <div className="col-lg-5 offset-md-1">
                    	
                    	<div className="card content">
						  <div className="card-body">
						  	<h5 className="custom-text-dark">NEW CUSTOMER</h5>
						  	<p>
						  		By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
						  	</p>

						  	<Link className="btn btn-outline-primary cust-link-tag-btn" to="/register">CREATE ACCOUNT</Link>
						  </div>
						</div>
                    </div>

                    <div className="col-lg-5">
                    	
                    	<div className="card content">
						  <div className="card-body">
						  	<h5 className="custom-text-dark">LOGIN</h5>
          					<p> If you have an account with us, please log in.</p>

          						<div className="form-group">
				                  	<label htmlFor="loginInputName" className="small">E-MAIL <sup>*</sup></label>
				                  	<div className="text-muted float-right">* Required Fields</div>
				                  	<input type="email" name="" className="form-control bg-light" id="loginInputName" placeholder="Enter E-mail" />
				                </div>

				                <div className="form-group">
				                  <label htmlFor="loginInputEmail" className="small">PASSWORD <sup>*</sup></label>
				                  <input type="password" value="" name="" className="form-control bg-light" id="loginInputEmail" placeholder="Enter Password" />
				                </div>
				                <div className="form-group">
			                      <button className="btn btn-outline-primary" type="submit">LOGIN</button>
			                    </div>
						  </div>
						</div>
                    </div>

                   
                </div>
            </div>
        </div>
            
  );
}

export default ClientLogin;
