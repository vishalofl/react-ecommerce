import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 


function OrderDetails() {

    return (

        <div>
            <div className="container-fluid details_page">
                <div className="row pt-3">
                    <div className="col-lg-12 bg-white mb-3 p-3" >
                        <div className="row">
                            <div class="col-sm-12 text-center">
                                <span className="h5 font-weight-bold">ORDER ID : OD115221001949637000</span> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 bg-white mb-5" >
                        <div className="row">
                            <div class="col-sm-4 border-right my-3">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <h5 class="custom-font-dark mb-3">Delivery Address</h5>
                                        <h6 class="custom-font-dark">Mahesh Upasani</h6>
                                        <p class="card-text">
                                            1st Floor, the playce, Marathon Maxima, Lal Bahadur Shastri Road, Moti Nagar,
                                            <br/>
                                            Mulund West
                                            <br/>
                                            Mumbai - 400080
                                            <br/>
                                            Maharashtra
                                        </p>
                                        <p class="card-text">Mobile: 9923113288</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-2 border-right my-3">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <h6 class="custom-font-dark">JBL Headphone MX-123 Red </h6>
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src="https://pcbonlineshop.com/photos/product/4/176/4.jpg" alt="..." class="img-thumbnail" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 border-right my-3">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <p className="custom-font-dark">Product Details</p>
                                        <p>
                                            JBL Headphone MX-123 Red <br/>
                                            Color: Black White Size: 7 <br/>
                                            Seller:BourneCollections
                                        </p>

                                        <p>QTY : 1</p>
                                        <p>AMOUNT : ₹764</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 my-3">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <p className="custom-font-dark">Delivery & Payment Details</p>
                                        <p>Placed On: 24 Jun 2019</p>
                                        <p>Delivered On: 26 Jun 2019</p>

                                        <p>Payment Mode : Netbanking</p>
                                        <button type="button" className="btn btn-primary"> Request Invoice </button>
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

export default OrderDetails;
