import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 


function Address() {

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
                                <h3 className="custom-font-dark text-uppercase">Manage Address</h3>
                            </div>

                            <div className="col-sm-4 text-right">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> ADD NEW ADDRESS</button>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-10 mb-1">
                                <div className="card">
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
                                        <div className="row ">
                                            <div className="col-sm-6 card-btn" data-toggle="modal" data-target="#exampleModal">
                                                <p>EDIT</p>
                                            </div>
                                            <div className="col-sm-6 card-btn">
                                                <p className="text-danger">REMOVE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-10 mb-1">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mahesh Upasani</h5>
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
                                        <div className="row ">
                                            <div className="col-sm-6 card-btn" data-toggle="modal" data-target="#exampleModal">
                                                <p>EDIT</p>
                                            </div>
                                            <div className="col-sm-6 card-btn">
                                                <p className="text-danger">REMOVE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                </div>
            </div>
        </div>

  );
}

export default Address;
