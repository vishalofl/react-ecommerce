import React from 'react';
import { Link } from "react-router-dom";


function Payment() {
    return (

    	<div className="container-fluid details_page">
		   	<div className="row pb-5">
		        <div className="col-lg-7 bg-white pt-3 mr-4 ml-5">
                        <div className="row py-2">
                            
                            <div className="col-sm-6">
                                <h4 className="custom-font-dark text-uppercase">payment option</h4>
                            </div>

                            <div className="col-sm-6 text-right">
                               
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-12 mb-1">
                            	<ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio1">Credit / Detbit / ATM card</label>
                                        </div>

                                    </li>
                                    <li class="list-group-item">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio2">Paytm</label>
                                        </div>

                                    </li>
                                    <li class="list-group-item">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio3">Net Banking</label>
                                        </div>

                                    </li>
                                    <li class="list-group-item">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio4">Cash on Delivery</label>
                                        </div>

                                    </li>
                                    <li class="list-group-item"></li>
                                </ul>
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
    		            	<Link to="/checkout" className="btn btn-primary py-2 btn-block text-white">Place Order </Link>
    		          	</div>
    		    	</div>
		    </div>
        </div>



       
  );
}

export default Payment;
