import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    const test = ()=>{
    
        console.log('hellooooooo')

    }

    return (

        <div>
            <div className="container-fluid details_page">
                <div className="row bg-white pt-3">
                    <div className="col-lg-2" id="sidebar">
                        <div id="accordion">
                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                    CATEGORIES
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <ul className="list-group list-group-flush bg-secondary ">
                                    <li className="list-group-item bg-light ">MEN</li>
                                    <li className="list-group-item bg-light ">WOMEN</li>
                                    <li className="list-group-item bg-light ">MOBILE</li>
                                    <li className="list-group-item bg-light ">OTHER</li>
                                </ul>
                            </div>

                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
                                PRICE RANGE
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div id="collapseTwo" className="collapse bg-light show" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <select className="w-75 ml-3">
                                            <option defaultValue>MIN</option>
                                            <option value="1">500</option>
                                            <option value="2">1000</option>
                                            <option value="3">2000</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <select className="w-75">
                                            <option value="3">2000+</option>
                                            <option value="1">500</option>
                                            <option value="2">1000</option>
                                            <option value="3">2000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="headingThree">
                                 COLOR
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                                <div className="d-inline mr-3 mt-2 red-color"></div>
                                                <div className="d-inline">Red</div>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label mt-1" htmlFor="customCheck2">
                                                <div className="d-inline mr-3 mt-2 yellow-color"></div>
                                                <div className="d-inline">Yellow</div>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label mt-1" htmlFor="customCheck3">
                                                <div className="d-inline mr-3 mt-2 green-color"></div>
                                                <div className="d-inline">Green</div>
                                            </label>
                                        </div>
                                    </li>

                                    
                                </ul>
                            </div>

                            <div className="sidebar-header" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" id="headingThree">
                                 SIZE
                                <span className="float-right">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div id="collapseFour" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customSize1" />
                                            <label className="custom-control-label" htmlFor="customSize1">S</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customSize2" />
                                            <label className="custom-control-label" htmlFor="customSize2">M</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-light">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customSize3" />
                                            <label className="custom-control-label" htmlFor="customSize3">L</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10" >
                        <div className="row">
                            <div className="col-6">
                                <h3 className="custom-text-dark">Trending (12)</h3>
                            </div>
                            <span className="mt-5"></span>
                            <div className="col-4"></div>
                            <div className="col-2 float-right">
                                  <select className="form-control" id="sel1">
                                    <option>Featured</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                    <option>price</option>
                                  </select>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100 border-0">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-01-02.jpg" alt="" />
                                        <div className="card-body">
                                            <p className="small text-dark">Item first</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                        </div>
                                    </Link>
                                    <div className="overlay text-center">
                                        <div className="row">
                                            <div className="col-sm-7 offset-sm-1">
                                                <button type="button" className="btn btn-primary w-100" onClick={test}>
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </button>
                                            </div>

                                            <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger w-100"> 
                                                   <i className="fa fa-heart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="custom-text-dark">$24.99</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100 border-0">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-18.jpg" alt="" />
                                        <div className="card-body">
                                            <p className="small text-dark">Item first</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                        </div>
                                    </Link>
                                    <div className="overlay text-center">
                                        <div className="row">
                                            <div className="col-sm-7 offset-sm-1">
                                                <button type="button" className="btn btn-primary w-100" onClick={test}>
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </button>
                                            </div>

                                            <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger w-100"> 
                                                   <i className="fa fa-heart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="custom-text-dark">$24.99</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100 border-0">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-05.jpg" alt="" />
                                        <div className="card-body">
                                            <p className="small text-dark">Item first</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                        </div>
                                    </Link>
                                    <div className="overlay text-center">
                                        <div className="row">
                                            <div className="col-sm-7 offset-sm-1">
                                                <button type="button" className="btn btn-primary w-100" onClick={test}>
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </button>
                                            </div>

                                            <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger w-100"> 
                                                   <i className="fa fa-heart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="custom-text-dark">$24.99</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100 border-0">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-02-02.jpg" alt="" />
                                        <div className="card-body">
                                            <p className="small text-dark">Item first</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                        </div>
                                    </Link>
                                    <div className="overlay text-center">
                                        <div className="row">
                                            <div className="col-sm-7 offset-sm-1">
                                                <button type="button" className="btn btn-primary w-100" onClick={test}>
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </button>
                                            </div>

                                            <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger w-100"> 
                                                   <i className="fa fa-heart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="custom-text-dark">$24.99</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 product-block">
                                <div className="card h-100 border-0">
                                    <Link to="/product-details"><img className="card-img-top" src="/assets/images/product/product-27.jpg" alt="" />
                                        <div className="card-body">
                                            <p className="small text-dark">Item first</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                            <p className="card-text">Lorem ipsum dolor..</p>
                                        </div>
                                    </Link>
                                    <div className="overlay text-center">
                                        <div className="row">
                                            <div className="col-sm-7 offset-sm-1">
                                                <button type="button" className="btn btn-primary w-100" onClick={test}>
                                                    <i className="fas fa-shopping-bag"></i> ADD TO CART
                                                </button>
                                            </div>

                                            <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger w-100"> 
                                                   <i className="fa fa-heart" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="custom-text-dark">$24.99</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
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

export default Home;
