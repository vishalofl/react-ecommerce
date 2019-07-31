import React,{ useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

// import "./custom.css";

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

                        <li className={ "nav-item dropdown megamenu-li " + (isActive(history,"/product-details")) }>
                           <a className="nav-link" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORIES</a>
                            <div className="dropdown-menu megamenu px-5" aria-labelledby="dropdown01">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Links</h5>
                                        <ul className="custom-li">
                                            <li> <Link to="">Cras justo odio</Link></li>
                                            <li><Link to=""> Dapibus ac facilisis in</Link></li>
                                            <li><Link to=""> Morbi leo risus</Link></li>
                                            <li><Link to=""> Porta ac consectetur ac</Link></li>
                                            <li><Link to=""> Vestibulum at eros</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Links</h5>
                                        <ul className="custom-li">
                                            <li> <Link to="" to="">Cras justo odio</Link></li>
                                            <li><Link to=""> Dapibus ac facilisis in</Link></li>
                                            <li><Link to=""> Morbi leo risus</Link></li>
                                            <li><Link to=""> Porta ac consectetur ac</Link></li>
                                            <li><Link to=""> Vestibulum at eros</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Paragraph</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus in veritatis, facilis eligendi sunt, culpa autem harum porro earum.</p>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Image</h5>
                                    </div>
                                </div>
                           </div>
                        </li>

                        {/*<li className={ "nav-item " + (isActive(history,"/about")) }>
                            <Link to="" className="nav-link" to="">ABOUT</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/services")) }>
                            <Link className="nav-link" to="">SERVICES</Link>
                        </li>
                        <li className={ "nav-item " + (isActive(history,"/conatct")) }>
                            <Link className="nav-link" to="">CONTACT</Link>
                        </li>

                        <li className={ "nav-item " + (isActive(history,"/product-details")) }>
                            <Link className="nav-link" to="/product-details">DETAILS</Link>
                        </li>*/}
                        

                    </ul>
                    <form className="mx-2 my-auto d-inline w-100">
                        <div className="input-group cust-navbar-search">
                            <input type="text" className="form-control border-0" placeholder="Search for Products & more..." />
                        </div>
                    </form>
                    <div className="navbar-form navbar-right btn-group">
                        <ul className="navbar-nav ml-auto">
                        <li className={ "nav-item " + (isActive(history,"/cart")) }>
                            <Link className="nav-link" to="/cart"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></Link>
                        </li>

                        <li className={ "nav-item " + (isActive(history,"/wishlist")) }>
                            <Link className="nav-link" to="/wishlist"><i className="fa fa-heart fa-lg" aria-hidden="true"></i></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               VISHAL
                               <span className="ml-2"><i className="fa fa-user" aria-hidden="true"></i></span> 
                            </a>
                            <div className="dropdown-menu dropdown-menu-right mt-0 p-3" aria-labelledby="navbarDropdown">
                                <ul className="dashboard-list mt-1 px-0">
                                    <li className={ "nav-cust-li " + (isActive(history,"/login")) } ><Link to="/login">Log In</Link></li>
                                    <li className={ "nav-cust-li " + (isActive(history,"/register")) } ><Link to="/register">Register</Link></li>
                                    <li className={ "nav-cust-li " + (isActive(history,"/account")) } ><Link to="/account">profile</Link></li>
                                    <li >Log out</li>
                                </ul>
                            </div>
                        </li>
                        <li className={ "nav-item" }>
                           
                        </li>
                    </ul>
                    </div>

                   
                </div>
            </nav>
        </div>
  );
}

export default withRouter(Navbar);
