import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "./Sidebar.css";

const isActive = (history, path) => { 

  if(history.location.pathname === path) {
    return 'link-active';
  } else {
    return '';
  }

}

function Sidebar({history}) {

        // $('#sidebarCollapse').on('click', function () {
        //         $('#sidebar').toggleClass('active');
        // });
    return (

        <div>
            <div id="sidebar">
                <div className="card-body bg-white">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW85kSQOcDF7mFFbtiGoParQ07mr-_5bTDdWqEilSAB-IIyGnb" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-9">
                            <small>Hello</small>
                            <h6><b>Vishal Gaikwad</b></h6>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-3">
                    <ul className="list-group list-group-flush">
                        <li className={ "list-group-item " + (isActive(history,"/orders")) } >
                            <Link to="/orders">    

                            <h6>MY ORDER <span className="float-right">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span></h6>
                            </Link> 
                        </li>
                    </ul>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to="">    

                            <h6>ACCOUNT SETTING <span className="float-right">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span></h6>
                            </Link> 
                        </li>
                    </ul>

                    <ul className="dashboard-list mt-2 px-0">
                        <li className={ "cust-sidebar-link " + (isActive(history,"/account")) } ><Link to="/account">Profile Information</Link> </li>
                        <li className={ "cust-sidebar-link " + (isActive(history,"/address")) }><Link to="/address">Manage Address</Link></li>
                    </ul>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to="">    

                            <h6>PAYMENT <span className="float-right">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span></h6>
                            </Link> 
                        </li>
                    </ul>

                    <ul className="dashboard-list mt-2 px-0">
                        <li>Phone Pay Wallet</li>
                        <li>Gift Card</li>
                        <li>Saved Card</li>
                    </ul>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to="">    

                            <h6>MY STUFF <span className="float-right">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span></h6>
                            </Link> 
                        </li>
                    </ul>

                    <ul className="dashboard-list mt-2 px-0">
                        <li>My Reward </li>
                        <li>My Reviews & Ratings</li>
                        <li className={ "cust-sidebar-link " + (isActive(history,"/wishlist")) } ><Link to="/wishlist">My Wishlist</Link> </li>

                    </ul>
                    
                    <ul className="list-group list-group-flush mb-5">
                        <li className="list-group-item">
                            <Link to="">    
                                <h5 className="font-weight-bold text-danger">LOGOUT <span className="float-right">
                                <i className="fa fa-power-off" aria-hidden="true"></i>
                                </span></h5>
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>

  );
}

export default withRouter(Sidebar);
