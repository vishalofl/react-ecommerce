import React , { useState }from 'react';
import {Link, Redirect} from 'react-router-dom';
import './sb-admin-2.css';

import Sidebar from './Sidebar';

import Navbar from './Navbar';
import Footer from './Footer';



const ProductForm = ()=>{

	return(
	
		<div id="page-top">
			<div id="wrapper">
    			{/*sidebar*/}
    			<Sidebar></Sidebar>

			    <div id="content-wrapper" className="d-flex flex-column">

			      	<div id="content">
			      		<Navbar></Navbar>
			      		
				        <div className="container-fluid">

				            <div className="card shadow mb-4">
				                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
				                  <h6 className="m-0 font-weight-bold">Product Form</h6>
				                </a>
				                <div className="collapse show" id="collapseCardExample">
				                  	<div className="card-body">
							          	<div className="">
							          		<form>
											  	<div className="form-group row">
												    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Product Name</label>
												    <div className="col-sm-10">
												      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
												    </div>
											  	</div>
											  	<div className="form-group row">
												    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Category</label>
												    <div className="col-sm-10">
												    	<select class="custom-select">
													    	<option selected>Choose Category...</option>
													    	<option value="1">One</option>
													    	<option value="2">Two</option>
													    	<option value="3">Three</option>
													  	</select>
												    </div>
											  	</div>
											  	<div className="form-group row">
												    <div className="col-sm-10">
												      <button type="submit" className="btn btn-primary">Submit</button>
												    </div>
											  	</div>
											</form>
							          	</div>
				                  	</div>
				                </div>
				              </div>
				        </div>
			      	</div>

			      	
			    </div>
  			</div>
  
		  	<Footer></Footer>

		</div> 

	);

}

export default ProductForm;
