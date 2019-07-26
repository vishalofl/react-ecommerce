import React,{ useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

import "./custom.css";

import "./Navbar.css";

const isActive = (history, path) => { 

  if(history.location.pathname === path) {
    return 'link-active';
  } else {
    return '';
  }

}

function Navbar({ history }) {
 
    const [whenNotFixed, setHeaderText] = useState(false);
        
    useEffect(() => {
        const scrollCallBack = window.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true ) {
                  setHeaderText(true);
            } else {
                setHeaderText(false);
            }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
      }, []);

    return (
        <div>
            <nav className= { "navbar navbar-expand-lg navbar-white bg-white custom-navbar " + ( (whenNotFixed) ? 'sticky' : '') } >
                <Link className="navbar-brand" to="/">
                    <img className="d-block img-fluid" src="/assets/images/logo.png"  style={{"height":"35px"}} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">

                        <li className={ "nav-item " + (isActive(history,"/home")) }>
                            <Link className="nav-link" to="/home">HOME
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li class="nav-item dropdown megamenu-li">
                           <a class="nav-link" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MEGA MENU</a>
                           <div class="dropdown-menu megamenu px-5" aria-labelledby="dropdown01">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3">
                                        <h5>Links</h5>
                                        <ul class="custom-li">
                                            <li> <Link>Cras justo odio</Link></li>
                                            <li><Link> Dapibus ac facilisis in</Link></li>
                                            <li><Link> Morbi leo risus</Link></li>
                                            <li><Link> Porta ac consectetur ac</Link></li>
                                            <li><Link> Vestibulum at eros</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-lg-3">
                                        <h5>Links</h5>
                                        <ul class="custom-li">
                                            <li> <Link>Cras justo odio</Link></li>
                                            <li><Link> Dapibus ac facilisis in</Link></li>
                                            <li><Link> Morbi leo risus</Link></li>
                                            <li><Link> Porta ac consectetur ac</Link></li>
                                            <li><Link> Vestibulum at eros</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-lg-3">
                                        <h5>Paragraph</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus in veritatis, facilis eligendi sunt, culpa autem harum porro earum.</p>
                                    </div>
                                    <div class="col-sm-6 col-lg-3">
                                        <h5>Image</h5>
                                    </div>
                                </div>
                           </div>
                          </li>
                        <li className={ "nav-item " + (isActive(history,"/product-details")) }>
                            <a className="nav-link dropdown-toggle" href="" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SHOP</a>
                            <div className="dropdown-menu megamenu ml-2 p-3" aria-labelledby="dropdown02">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5>Product</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5>Image Slider</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5>Image Slider</h5>
                                        <h5>Paragraph</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit itaque minus distinctio possimus reiciendis et repellat. Voluptate, temporibus veniam et praesentium alias, maxime repudiandae aliquid, natus omnis animi iste!</p>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5>Image Slider</h5>
                                        <h5>Links</h5>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className={ "nav-item " + (isActive(history,"/about")) }>
                            <Link className="nav-link" to="">ABOUT</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/services")) }>
                            <Link className="nav-link" to="">SERVICES</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/conatct")) }>
                            <Link className="nav-link" to="">CONTACT</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/cart")) }>
                            <Link className="nav-link" to="/cart">CART</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/login")) }>
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </li>

                        <li className={ "nav-item " + (isActive(history,"/register")) }>
                            <Link className="nav-link" to="/register">REGISTER</Link>
                        </li>

                        <li className={ "nav-item " + (isActive(history,"/product-details")) }>
                            <Link className="nav-link" to="/product-details">DETAILS</Link>
                        </li>

                        <li className={ "nav-item " + (isActive(history,"/dashboard")) }>
                            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
                        </li>
                       
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className={ "nav-item " + (isActive(history,"/my-cart")) }>
                            <a className="nav-link">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> VISHAL <i className="fas fa-user-circle"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Login</a>
                                <a className="dropdown-item" href="#">Sign up</a>
                                <a className="dropdown-item" href="#">Register</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  );
}

export default withRouter(Navbar);
