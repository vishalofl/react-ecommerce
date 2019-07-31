import React from 'react';
import { Link } from "react-router-dom";


function Cart() {
    return (
        <div className="container-fluid details_page">
		   	<div className="row pb-5">
		        <div className="col-lg-7 bg-white pt-3 mr-4 ml-5">
		   			<h2 className="mb-4 text-center custom-text-dark-panel">MY CART</h2>
		          	<div className="table-responsive">
			            <table className="table">
			              	<thead>
				                <tr>
				                  	<th scope="col" className="border-0 bg-light align-middle" colSpan="2">
				                    	<div className="p-2 px-3 text-uppercase">Product</div>
				                  	</th>
				                  	<th scope="col" className="border-0 bg-light">
				                    	<div className="py-2 text-uppercase">Price</div>
				                  	</th>
				                  	<th scope="col" className="border-0 bg-light align-middle">
				                    	<div className="py-2 text-uppercase">Quantity</div>
				                  	</th>
				                  	<th scope="col" className="border-0 bg-light">
				                    	<div className="py-2 text-uppercase">Remove</div>
				                  	</th>
				                </tr>
			              	</thead>
			              	<tbody>
				                <tr>
				                  	<td className="border-0 align-left">
				                      	<img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
				                  	</td>
				                  	<td className="border-0 align-left">
		                        		<h5 className="mb-0">
		                        			<Link to="" className="text-dark d-inline-block align-middle">Timex Unisex Originals</Link>
		                        		</h5>
		                        		<span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
				                  	</td>

				                  	<td className="border-0 align-middle"><strong>$79.00</strong></td>
				                  	<td className="border-0 align-middle"><strong>3</strong></td>
				                  	<td className="border-0 align-middle"><Link to="" className="text-dark"><span className="text-danger card-btn"><i className="far fa-trash-alt fa-lg"></i></span></Link></td>
				                </tr>

				                <tr>
				                  	<td className="border-0 align-left">
				                      	<img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
				                  	</td>
				                  	<td className="border-0 align-left">
		                        		<h5 className="mb-0">
		                        			<Link to="" className="text-dark d-inline-block align-middle">Timex Unisex Originals</Link>
		                        		</h5>
		                        		<span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
				                  	</td>
				                  	<td className="align-middle"><strong>$79.00</strong></td>
				                  	<td className="align-middle"><strong>3</strong></td>
				                  	<td className="align-middle"><Link to="" className="text-dark"><span className="text-danger card-btn"><i className="far fa-trash-alt fa-lg"></i></span></Link>
				                  	</td>
				                </tr>
				                <tr>
				                    <td className="border-0 align-left">
				                      	<img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-2_qxjis2.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
				                  	</td>
				                  	<td className="border-0 align-left">
		                        		<h5 className="mb-0">
		                        			<Link to="" className="text-dark d-inline-block align-middle">Timex Unisex Originals</Link>
		                        		</h5>
		                        		<span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
				                  	</td>

			                    	<td className="align-middle"><strong>$79.00</strong></td>
			                    	<td className="align-middle"><strong>3</strong></td>
			                    	<td className="align-middle"><Link to="" className="text-dark"> <span className="text-danger card-btn"><i className="far fa-trash-alt fa-lg"></i></span></Link>
			                    	</td>
				                </tr>
			              	</tbody>
			            </table>
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
		            	<Link to="/checkout" className="btn btn-primary py-2 btn-block text-white">Procceed to checkout</Link>
		          	</div>
		    	</div>
		    </div>
        </div>
  );
}

export default Cart;
