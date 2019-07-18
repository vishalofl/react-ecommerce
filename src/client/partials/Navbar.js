import React,{ useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

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
            <nav className= { "navbar navbar-expand-lg navbar-white bg-white " + ( (whenNotFixed) ? 'sticky' : '') } >
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
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <li className={ "nav-item " + (isActive(history,"/my-cart")) }>
                        <a className="nav-link">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-user-circle"></i></a>
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
