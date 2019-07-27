import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'; 


function Account() {

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
                        <h3 className="custom-text-dark">Personal Information</h3>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label><small className="float-right pr-2">edit</small>
                                    <input type="email" className="form-control" id="inputEmail4" value="vishalgaikwad1718@gmail.com" placeholder="Email" readOnly />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label><small className="float-right pr-2">edit</small>
                                    <input type="password" className="form-control" id="inputPassword4" value="v123456789" placeholder="Password" readOnly />
                                </div>
                            </div>

                            <hr/>
                            <h3 className="custom-text-dark">GENERAL Information</h3>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">First Name</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Last Name</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Mobile No</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>

                                <div className="form-group col-md-6">
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputEmail4">Date of Birth ( Day )</label>
                                            <select className="form-control" id="sel1">
                                                    
                                                {days.map((item, key) => {
                                                  return (
                                                    <option value={item} key={key}>
                                                      {item}
                                                    </option>
                                                  );
                                                })}

                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputEmail4">Month</label>
                                            <select className="form-control" id="sel1">
                                                
                                                {monthNames.map((item, key) => {
                                                  return (
                                                    <option value={key + 1} key={key}>
                                                      {item}
                                                    </option>
                                                  );
                                                })}
                                              </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputEmail4">Year</label>

                                            <select className="form-control" id="sel1">
                                                {yearsAsc.map((item, key) => {
                                                  return (
                                                    <option value={item} key={key}>
                                                      {item}
                                                    </option>
                                                  );
                                                })}
                                              </select>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Gender </label>
                                    <br/>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Location </label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAddress">Your Bio </label>
                                <textarea className="form-control" placeholder="1234 Main St"></textarea>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-primary w-100">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Account;
