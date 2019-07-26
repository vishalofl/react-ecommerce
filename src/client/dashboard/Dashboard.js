import React from 'react';
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

        // $('#sidebarCollapse').on('click', function () {
        //         $('#sidebar').toggleClass('active');
        // });

    return (

        <div>
            <div className="container-fluid details_page">
                <div className="row pt-3">
                    <div className="col-lg-3 " id="sidebar">
                        <div class="card-body bg-white">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW85kSQOcDF7mFFbtiGoParQ07mr-_5bTDdWqEilSAB-IIyGnb" className="img-fluid"/>
                                </div>
                                <div className="col-md-8">
                                    <p>Hello</p>
                                    <h5>Vishal Gaikwad</h5>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h5>My Order <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></h5> 
                                </li>
                            </ul>
                                
                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                    COLLECTIONS
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                
                            </div>

                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                                PRODUCT TYPE
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">5 item</li>
                                    <li className="list-group-item">6 item</li>
                                    <li className="list-group-item">7 item</li>
                                    <li className="list-group-item">8 item</li>
                                </ul>
                            </div>
                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="headingThree">
                                 COLOR
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul className="list-group list-group-horizontal mt-3">
                                  <li className="list-group-item mx-2">red</li>
                                  <li className="list-group-item mx-2">yellow</li>
                                  <li className="list-group-item mx-2">green</li>
                                </ul>
                            </div>

                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" id="headingThree">
                                 SIZE
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul className="list-group list-group-horizontal mt-3">
                                  <li className="list-group-item mx-2">S</li>
                                  <li className="list-group-item mx-2">M</li>
                                  <li className="list-group-item mx-2">L</li>
                                </ul>
                            </div>

                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" id="headingThree">
                                 PRICE
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">red</li>
                                  <li className="list-group-item">yellow</li>
                                  <li className="list-group-item">green</li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-9 bg-white" style={{ 'border':'1px solid' }} >
                        <h3 className="custom-text-dark">Trending (12)</h3>
                        
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Dashboard;
