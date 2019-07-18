import React , { useState }from 'react';
import {Link, Redirect} from 'react-router-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';



const Product = ()=>{

	return(
	
		<div id="page-top">
			<div id="wrapper">
    			<Sidebar></Sidebar>

			    <div id="content-wrapper" className="d-flex flex-column">

			      	<div id="content">
			      		<Navbar></Navbar>
			      		
				        <div className="container-fluid">

				            <div className="card shadow mb-4">
				                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
				                  <h6 className="m-0 font-weight-bold">Product Dashboard</h6>
				                </a>
				                <div className="collapse show" id="collapseCardExample">
				                  	<div className="card-body">
				            			<Link className="btn btn-primary" to="/product-form">ADD</Link>
							          	<div className="row">
							          		<div className="table-responsive">
									            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									              <thead>
									                <tr>
									                  <th>Name</th>
									                  <th>Position</th>
									                  <th>Office</th>
									                  <th>Age</th>
									                  <th>Start date</th>
									                  <th>Salary</th>
									                </tr>
									              </thead>
									              <tfoot>
									                <tr>
									                  <th>Name</th>
									                  <th>Position</th>
									                  <th>Office</th>
									                  <th>Age</th>
									                  <th>Start date</th>
									                  <th>Salary</th>
									                </tr>
									              </tfoot>
									              <tbody>
								                    <tr>
								                      <td>Tiger Nixon</td>
								                      <td>System Architect</td>
								                      <td>Edinburgh</td>
								                      <td>61</td>
								                      <td>2011/04/25</td>
								                      <td>$320,800</td>
								                    </tr>
								                    <tr>
								                      <td>Tiger Nixon</td>
								                      <td>System Architect</td>
								                      <td>Edinburgh</td>
								                      <td>61</td>
								                      <td>2011/04/25</td>
								                      <td>$320,800</td>
								                    </tr>

								                    </tbody>
									            </table>
									        </div>
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

export default Product;
