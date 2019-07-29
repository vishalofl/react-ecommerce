import React from 'react';
import { Link } from "react-router-dom";


function Checkout() {
    return (

    	<div className="container-fluid details_page">
		   	<div className="row pb-5">
		        <div className="col-lg-7 bg-white pt-3 mr-4 ml-5">
                        <div className="row py-2">
                            
                            <div className="col-sm-6">
                                <h4 className="custom-font-dark text-uppercase">Delivery Address</h4>
                            </div>

                            <div className="col-sm-6 text-right">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> ADD NEW ADDRESS</button>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-12 mb-1">
                            	<table class="table border-0">
								  	<tbody>
								    	<tr>
								      		<td className="text-right">
								      			<div class="custom-control custom-radio">
									    			<input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" />
									    			<label class="custom-control-label" for="customControlValidation2"></label>
									  			</div>
								      		</td>
									      	<td>
									      		<div className="card-body p-0">
			                                        <h5 className="card-title">Vishal Gaikwad</h5>
			                                        <p className="card-text">
			                                            1st Floor, the playce, Marathon Maxima, Lal Bahadur Shastri Road, Moti Nagar,
			                                            <br/>
			                                            Mulund West
			                                            <br/>
			                                            Mumbai - 400080
			                                            <br/>
			                                            Maharashtra
			                                        </p>
			                                        <p className="card-text">Mobile: 9923113288</p>
			                                    </div>
									      	</td>
									      	<td>
	                                            <span data-toggle="modal" data-target="#exampleModal" className="text-primary card-btn"><i class="fas fa-pencil-alt fa-2x"></i></span>
									      	</td>
									      	<td>
									      		<span className="text-danger card-btn"><i class="far fa-trash-alt fa-2x"></i></span>
									      	</td>
									    </tr>

									    <tr>
								      		<td>
								      			<div class="custom-control custom-radio">
									    			<input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" />
									    			<label class="custom-control-label" for="customControlValidation3"></label>
									  			</div>
								      		</td>
									      	<td>
									      		<div className="card-body">
			                                        <h5 className="card-title">Vishal Gaikwad</h5>
			                                        <p className="card-text">
			                                            1st Floor, the playce, Marathon Maxima, Lal Bahadur Shastri Road, Moti Nagar,
			                                            <br/>
			                                            Mulund West
			                                            <br/>
			                                            Mumbai - 400080
			                                            <br/>
			                                            Maharashtra
			                                        </p>
			                                        <p className="card-text">Mobile: 9923113288</p>
			                    
			                                    </div>
									      	</td>
									      	<td>
	                                            <span data-toggle="modal" data-target="#exampleModal" className="text-primary card-btn"><i class="fas fa-pencil-alt fa-2x"></i></span>
									      	</td>
									      	<td>
									      		<span className="text-danger card-btn"><i class="far fa-trash-alt fa-2x"></i></span>
									      	</td>
									    </tr>
								  </tbody>
								</table>
                            </div>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title font-weight-bold" id="exampleModalLabel">EDIT ADDRESS</h5>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                {/*<label htmlFor="inputAddress">Name <small className="float-right text-danger">*</small></label>*/}
                                                <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="name" />
                                            </div>
                                            <div className="form-group">
                                                {/*<label htmlFor="inputAddress">Moblie No <small className="float-right text-danger">*</small></label>*/}
                                                <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="mobile" />
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    {/*<label htmlFor="inputAddress">Pin Code</label>*/}
                                                    <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="pin code" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/*<label htmlFor="inputAddress">State</label>*/}
                                                <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="state" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                {/*<label htmlFor="inputAddress">Address (House No, Buliding, Street, Area) </label>*/}
                                                <textarea className="form-control  custom-font-dark text-uppercase" placeholder="address"></textarea>
                                            </div>

                                            <div className="form-group">
                                                {/*<label htmlFor="inputAddress">Locality <small className="float-right text-danger">*</small></label>*/}
                                                <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="locality" />
                                            </div>

                                            <div className="form-group">
                                                {/*<label htmlFor="inputAddress">City/District <small className="float-right text-danger">*</small></label>*/}
                                                <input type="text" className="form-control  custom-font-dark text-uppercase" id="inputAddress" placeholder="district" />
                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address Type </label>
                                                <br/>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline1">Office</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">Home</label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">Make this as my Default Address</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
		        <div className="col-lg-4 bg-white pt-3 ">
		        	<div className="bg-light px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
		          	<div className="p-4">
		            	<p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
		            	<ul className="list-unstyled mb-4">
		              		<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
		              		<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
		              		<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
		              		<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
		                		<h5 className="font-weight-bold">$400.00</h5>
		              		</li>
		            	</ul>
		            	<Link to="/payment" className="btn btn-primary py-2 btn-block text-white">Procceed to Payment</Link>
		          	</div>
		    	</div>
		    </div>
        </div>



       
  );
}

export default Checkout;
