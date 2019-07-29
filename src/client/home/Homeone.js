import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";



function Homeone() {

    return (

        <div>

            <div className="container-fluid">
               {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>*/}

                <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img className="d-block img-fluid" src="/assets/images/slide-01.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src="/assets/images/slide-02.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src="/assets/images/slide-01.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="row">
                    <div className="col-6 my-4">
                        <div className="img-wrapper">
                            <img className="img-fluid" src="/assets/images/demo10_01_1024x.webp" alt=""/>
                            <Link to="/home">
                                <button className="btn">WOMEN</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 my-4">
                        <div className="img-wrapper">
                            <img className="img-fluid" src="/assets/images/demo10_02_1024x.webp"  alt="" />
                          <button className="btn">MEN</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 my-4">
                        <div className="img-wrapper">
                            <img className="img-fluid" src="/assets/images/demo10_03_800x.jpg" alt="" />
                            <button className="btn">SHOES</button>
                        </div>    
                    </div>
                    <div className="col-6 my-4">
                        <div className="img-wrapper">
                            <img className="img-fluid" src="/assets/images/demo10_04_800x.jpg" alt="" />
                            <button className="btn">ACCESSORIES</button>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h5 className="text-center custom-text-dark-panel">TRENDING</h5>
                        <h6 className="text-center custom-text-dark">Top View In This Week </h6>
                    </div>
                    <br/>
                    <div className="col-lg-3 col-md-6 mb-4 product-block">
                        <div className="card h-100">
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-01-02.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item One</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-03.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-05-02.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-17-01.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-06.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-21.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded mr-2"> <i className="far fa-heart"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded" data-toggle="modal" data-target="#exampleModal"> <i className="fas fa-search-plus"></i></button>
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
                            <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-24-01.jpg" alt="" /></Link>
                            <div className="card-body">
                                <p className="small text-dark">Item Two</p>
                                <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                <div className="overlay text-center">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary btn-sm mr-2 rounded"><i className="fas fa-shopping-bag"></i> Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm rounded"> <i className="far fa-heart"></i> wishlist</button>
                                      </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Item Two</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                              <div className="row">
                                <div className="col-6">
                                    <img className="img-fluid" src="/assets/images/product/product-21.jpg" alt="" />
                                </div>
                                <div className="col-6">
                                    <p className="small text-dark">Item Two</p>
                                    <p className="card-text">Lorem ipsum dolor..</p>
                                    <h5 className="custom-text-dark">$24.99</h5>
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary mr-2 rounded"><i className="fas fa-shopping-bag"></i> Add to Cart <i className="fas fa-plus"></i></button>
                                        <button type="button" className="btn btn-primary rounded mr-2"> <i className="far fa-heart"></i></button>
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

export default Homeone;
