import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 


function Orders() {

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
                                <h3 className="custom-text-dark">Order History</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mb-2">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <Link className="btn btn-primary link-btn" to="/order-details">  OD115221001949637000 </Link>
                                            </div>
                                            <div className="col-sm-4">
                                            </div>
                                            <div className="col-sm-2 text-right">
                                                <button type="button" className="btn btn-outline-primary"> <i className="fa fa-map-marker" aria-hidden="true"></i> Track Order</button>
                                            </div>
                                            <div className="col-sm-2 text-right">
                                                <button type="button" className="btn btn-outline-danger"> <i className="fa fa-question" aria-hidden="true"></i> Need Help</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pb-0">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td  style={{ 'width':'20%' }}>
                                                        <img src="https://pcbonlineshop.com/photos/product/4/176/4.jpg" alt="..." className="img-thumbnail" />
                                                    </td>
                                                    <td style={{ 'width':'30%' }} >
                                                        JBL Headphone MX-123 Red <br/>
                                                        Color: Black White Size: 7 <br/>
                                                        Seller:BourneCollections
                                                    </td>
                                                    <td  >
                                                        725 Rs/-
                                                    </td>
                                                    <td  >
                                                        Delivered on Thu, Apr 18th '19 <br/>
                                                        Your item has been delivered
                                                    </td>
                                                    <td  >
                                                        RATE & REVIEW PRODUCT
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Ordered On <b className="text-dark">Tue, Apr 16th '19</b>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                Order Total <b className="text-dark">₹764</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 mb-2">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-primary"> OD115221001949637000</button>
                                            </div>
                                            <div className="col-sm-4">
                                            </div>
                                            <div className="col-sm-2 text-right">
                                                <button type="button" className="btn btn-outline-primary"> <i className="fa fa-map-marker" aria-hidden="true"></i> Track Order</button>
                                            </div>
                                            <div className="col-sm-2 text-right">
                                                <button type="button" className="btn btn-outline-danger"> <i className="fa fa-question" aria-hidden="true"></i> Need Help</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pb-0">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td  style={{ 'width':'20%' }}>
                                                        <img src="https://cdn.shopify.com/s/files/1/1006/4028/products/640_12_oz_front_1024x1024.png?v=1550077612" alt="..." className="img-thumbnail" />
                                                    </td>
                                                    <td style={{ 'width':'30%' }} >
                                                        JBL Headphone MX-123 Red <br/>
                                                        Color: Black White Size: 7 <br/>
                                                        Seller:BourneCollections
                                                    </td>
                                                    <td>
                                                        725 Rs/-
                                                    </td>
                                                    <td>
                                                        Delivered on Thu, Apr 18th '19 <br/>
                                                        Your item has been delivered
                                                    </td>
                                                    <td>
                                                        RATE & REVIEW PRODUCT
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Ordered On <b className="text-dark">Tue, Apr 16th '19</b>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                Order Total <b className="text-dark">₹764</b>
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

export default Orders;
