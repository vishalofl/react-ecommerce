import React , { useState }from 'react';
import {Link, Redirect} from 'react-router-dom';
import './sb-admin-2.css';

import Sidebar from './Sidebar';

import Navbar from './Navbar';
import Footer from './Footer';



const Dashboard = ()=>{

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
				                  <h6 className="m-0 font-weight-bold">Collapsable Card Example</h6>
				                </a>
				                <div className="collapse show" id="collapseCardExample">
				                  	<div className="card-body">
				                    	<div className="d-sm-flex align-items-center justify-content-between mb-4">
								            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
								            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
								        </div>
							          	<div className="row">
								            <div className="col-xl-3 col-md-6 mb-4">
								              	<div className="card border-left-primary shadow h-100 py-2">
									                <div className="card-body">
									                  	<div className="row no-gutters align-items-center">
										                    <div className="col mr-2">
										                      	<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
										                      	<div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
										                    </div>
										                    <div className="col-auto">
										                      	<i className="fas fa-calendar fa-2x text-gray-300"></i>
										                    </div>
									                  	</div>
									                </div>
								              	</div>
								            </div>
							          	</div>
				                  	</div>
				                </div>
				              </div>

					        

				          	<h2>Modal Example</h2>
						  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
						    Open modal
						  </button>

						  <div className="modal" id="myModal">
						    <div className="modal-dialog">
						      <div className="modal-content">
						      
						        <div className="modal-header">
						          <h4 className="modal-title">Modal Heading</h4>
						          <button type="button" className="close" data-dismiss="modal">&times;</button>
						        </div>
						        
						        <div className="modal-body">
						          Modal body..
						        </div>
						        
						        <div className="modal-footer">
						          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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

export default Dashboard;
