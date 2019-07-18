import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer() {
    return (
        <div>
        	<div className="container-fluid footer-nav">
                <div className="row">
                    <div className="col-3 text-right pt-4">
                        <a className="text-right">BE IN TOUCH WITH US :</a>
                    </div>
                    <div className="col-5 pt-3">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-dark my-2 my-sm-0" type="submit">JOIN US</button>
                          </div>
                        </div>
                    </div>
                     <div className="col-4 pt-3">
                        <ul className="list-inline pt-2 float-right">
                          <li className="list-inline-item pr-2"><i className="fab fa-facebook-f fa-lg"></i></li>
                          <li className="list-inline-item pr-2"><i className="fab fa-twitter fa-lg"></i></li>
                          <li className="list-inline-item pr-2"><i className="fab fa-google fa-lg"></i></li>
                          <li className="list-inline-item pr-2"><i className="fab fa-instagram fa-lg"></i></li>
                          <li className="list-inline-item pr-2"><i className="fab fa-pinterest fa-lg"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="pt-5 px-5 bg-light">
                
            	<div className="row">
					<div className="col-md-3 col-lg-3 col-xl-3">
						<div className="tt-mobile-collapse">
							<h5 className="custom-text-dark">
								CATEGORIES
							</h5>
							<div className="footer-list ">
								<p ><a className="text-dark" href="listing-collection.html">Women</a></p>
								<p><a className="text-dark" href="listing-collection.html">Men</a></p>
								<p><a className="text-dark" href="listing-collection.html">Accessories</a></p>
								<p><a className="text-dark" href="listing-collection.html">Shoes</a></p>
								<p><a className="text-dark" href="listing-collection.html">New Arrivals</a></p>
								<p><a className="text-dark" href="listing-collection.html">Clearence</a></p>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-lg-3 col-xl-3">
						<div className="tt-mobile-collapse">
							<h5 className="custom-text-dark">
								BUY WITH US
							</h5>
							<div className="footer-list ">
								<p ><a className="text-dark" href="listing-collection.html">About Us</a></p>
								<p><a className="text-dark" href="listing-collection.html">Services</a></p>
								<p><a className="text-dark" href="listing-collection.html">Contact Us</a></p>
								<p><a className="text-dark" href="listing-collection.html">FAQs</a></p>
								<p><a className="text-dark" href="listing-collection.html">Privacy Policy</a></p>
								<p><a className="text-dark" href="listing-collection.html">Terms and Conditions</a></p>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-lg-3 col-xl-3">
						<div className="tt-mobile-collapse">
							<h5 className="custom-text-dark">
								ABOUT
							</h5>
							<div className="footer-list">
								<p className="text-dark">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-lg-3 col-xl-3">
						<div className="tt-mobile-collapse">
							<h5 className="custom-text-dark">
								CONTACT US
							</h5>
							<div className="footer-list">
								<p className="text-dark">ADDRESS: 7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</p>
								
								<p className="text-dark">PHONE: +566 4774 9930; +566 4774 9940</p>
								<p className="text-dark">HOURS: all week from 9 am to 9 pm</p>
								<p className="text-dark">E-MAIL: info@mydomain.com</p>
							</div>
						</div>
					</div>
				</div>
               
              </footer>
            
        </div>
  );
}

export default Footer;
