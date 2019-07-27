import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 


function WishList() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const days = [];
    for(var i = 1; i <= 31; i++) {
        days.push(i)
    }

    var d = new Date();
    var n = d.getFullYear();
    const years = [];
    for(var i = 1920; i <= n; i++) {
        years.push(i)
    }
    const yearsAsc = years.reverse();

    return (

        <div>
            <div className="container-fluid details_page">
                <div className="row pt-3">
                    <div className="col-lg-2">
                        <Sidebar/>
                    </div>

                    <div className="col-lg-10 bg-white mb-5 p-4" >
                        <div className="row">
                            
                            <div className="col-sm-6">
                                <h3 className="custom-text-dark">WISH LIST</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-sm-12 mb-2 border-bottom">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <img src="https://pcbonlineshop.com/photos/product/4/176/4.jpg" alt="..." class="img-thumbnail" />
                                            </div>
                                            <div className="col-sm-9 mt-4">
                                                <p className="h4 font-weight-bold"> Solid Beanie Cap  (Pack of 2)</p>
                                                <p className="h5"> ₹499₹1,30061% off Hurry, Only a few left!</p>
                                                <p className="h6"> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
                                            </div>
                                            <div className="col-sm-1 mt-5">
                                                <span className="wishlist-remove">
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 mb-2 border-bottom">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4zjQCasRQKjRxwCvYshmLkpnnl3dLj8Qm3Bg9mTr91s30sBTEA" alt="..." class="img-thumbnail" alt="..." class="img-thumbnail" />
                                            </div>
                                            <div className="col-sm-9 mt-4">
                                                <p className="h4 font-weight-bold"> Amazon Fire Stick - 2</p>
                                                <p className="h5"> ₹499₹1,30061% off Hurry, Only a few left!</p>
                                                <p className="h6"> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
                                            </div>
                                            <div className="col-sm-1 mt-5">
                                                <span className="wishlist-remove">
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 mb-2 border-bottom">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfVdYnp8luOY1uKii5uMzkWc9TfwnVSrabOKCk0Arl6BQbeOy" alt="..." class="img-thumbnail" alt="..." class="img-thumbnail" />
                                            </div>
                                            <div className="col-sm-9 mt-4">
                                                <p className="h4 font-weight-bold"> Canon Camera  DR-250</p>
                                                <p className="h5"> ₹499₹1,30061% off Hurry, Only a few left!</p>
                                                <p className="h6"> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
                                            </div>
                                            <div className="col-sm-1 mt-5">
                                                <span className="wishlist-remove">
                                                    <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default WishList;
