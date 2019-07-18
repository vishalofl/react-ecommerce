import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

        // $('#sidebarCollapse').on('click', function () {
        //         $('#sidebar').toggleClass('active');
        // });

    return (

        <div>
            <div className="container-fluid details_page">
                <div className="row bg-white pt-3">
                    <div className="col-lg-3" id="sidebar">
                        <div id="accordion">
                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                    COLLECTIONS
                                <span className="float-right">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">First item</li>
                                    <li class="list-group-item">Second item</li>
                                    <li class="list-group-item">Third item</li>
                                    <li class="list-group-item">Fourth item</li>
                                </ul>
                            </div>

                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                                PRODUCT TYPE
                                <span className="float-right">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">5 item</li>
                                    <li class="list-group-item">6 item</li>
                                    <li class="list-group-item">7 item</li>
                                    <li class="list-group-item">8 item</li>
                                </ul>
                            </div>
                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="headingThree">
                                 COLOR
                                <span className="float-right">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul class="list-group list-group-horizontal mt-3">
                                  <li class="list-group-item mx-2">red</li>
                                  <li class="list-group-item mx-2">yellow</li>
                                  <li class="list-group-item mx-2">green</li>
                                </ul>
                            </div>

                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" id="headingThree">
                                 SIZE
                                <span className="float-right">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul class="list-group list-group-horizontal mt-3">
                                  <li class="list-group-item mx-2">S</li>
                                  <li class="list-group-item mx-2">M</li>
                                  <li class="list-group-item mx-2">L</li>
                                </ul>
                            </div>

                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" id="headingThree">
                                 PRICE
                                <span className="float-right">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">red</li>
                                  <li class="list-group-item">yellow</li>
                                  <li class="list-group-item">green</li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-9" >
                        <div className="row">
                            <div className="col-6">
                                <h3 className="custom-text-dark">Trending (12)</h3>
                            </div>
                            <span className="mt-5"></span>
                            <div className="col-4"></div>
                            <div className="col-2 float-right">
                                  <select class="form-control" id="sel1">
                                    <option>Featured</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                    <option>price</option>
                                  </select>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-01-02.jpg" alt="" /></Link>
                                    <div className="card-body">
                                        <p className="small text-dark">Item One</p>
                                        <p className="card-text">Lorem ipsum dolor..</p>
                                            <h5 className="custom-text-dark">$24.99</h5>
                                        <div className="overlay text-center">
                                            <div class="btn-group" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary btn-sm mr-2 rounded"><i class="fas fa-shopping-bag"></i> Cart <i class="fas fa-plus"></i></button>
                                                <button type="button" class="btn btn-primary btn-sm rounded"> <i class="far fa-heart"></i> wishlist</button>
                                              </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-18.jpg" alt="" /></Link>
                                    <div className="card-body">
                                        <p className="small text-dark">Item One</p>
                                        <p className="card-text">Lorem ipsum dolor..</p>
                                            <h5 className="custom-text-dark">$24.99</h5>
                                        <div className="overlay text-center">
                                            <div class="btn-group" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary btn-sm mr-2 rounded"><i class="fas fa-shopping-bag"></i> Cart <i class="fas fa-plus"></i></button>
                                                <button type="button" class="btn btn-primary btn-sm rounded"> <i class="far fa-heart"></i> wishlist</button>
                                              </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-05.jpg" alt="" /></Link>
                                    <div className="card-body">
                                        <p className="small text-dark">Item One</p>
                                        <p className="card-text">Lorem ipsum dolor..</p>
                                            <h5 className="custom-text-dark">$24.99</h5>
                                        <div className="overlay text-center">
                                            <div class="btn-group" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary btn-sm mr-2 rounded"><i class="fas fa-shopping-bag"></i> Cart <i class="fas fa-plus"></i></button>
                                                <button type="button" class="btn btn-primary btn-sm rounded"> <i class="far fa-heart"></i> wishlist</button>
                                              </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-02-02.jpg" alt="" /></Link>
                                    <div className="card-body">
                                        <p className="small text-dark">Item One</p>
                                        <p className="card-text">Lorem ipsum dolor..</p>
                                            <h5 className="custom-text-dark">$24.99</h5>
                                        <div className="overlay text-center">
                                            <div class="btn-group" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary btn-sm mr-2 rounded"><i class="fas fa-shopping-bag"></i> Cart <i class="fas fa-plus"></i></button>
                                                <button type="button" class="btn btn-primary btn-sm rounded"> <i class="far fa-heart"></i> wishlist</button>
                                              </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-27.jpg" alt="" /></Link>
                                    <div className="card-body">
                                        <p className="small text-dark">Item One</p>
                                        <p className="card-text">Lorem ipsum dolor..</p>
                                            <h5 className="custom-text-dark">$24.99</h5>
                                        <div className="overlay text-center">
                                            <div class="btn-group" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary btn-sm mr-2 rounded"><i class="fas fa-shopping-bag"></i> Cart <i class="fas fa-plus"></i></button>
                                                <button type="button" class="btn btn-primary btn-sm rounded"> <i class="far fa-heart"></i> wishlist</button>
                                              </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
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

export default Home;
