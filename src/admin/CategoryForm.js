import React , { useState }from 'react';
import {Link, Redirect} from 'react-router-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';



const CategoryForm = ()=>{

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
				                  <h6 className="m-0 font-weight-bold">Category Form</h6>
				                </a>
				                <div className="collapse show" id="collapseCardExample">
				                  	<div className="card-body">
							          	<div className="">
							          		<form>
											  	<div className="form-group row">
												    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category Name</label>
												    <div className="col-sm-10">
												      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
												    </div>
											  	</div>
											  	<div className="form-group row">
												    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
												    <div className="col-sm-10">
												      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
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

export default CategoryForm;
