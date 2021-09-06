import React from 'react';
import logo from '../img/logo13.png';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid" >
                    <Link class="navbar-brand"to="/home">
                        <img class="logoImg" src={logo} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="nav" >
                            <li className="navitem active">
                                <NavLink className="nav-link nav-pills" to="/home">Home</NavLink>
                            </li>
                            <li className="navitem">
                                <NavLink className="nav-link nav-pills" to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="navitem">
                                <NavLink className="nav-link nav-pills" to="/product">Products</NavLink>
                            </li>
                            <li className="navitem">
                                <NavLink className="nav-link nav-pills" to="/shoppingCart">Trolley</NavLink>
                            </li>
                            <li className="navitem">
                            <NavLink className="nav-link nav-pills" to="/contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="trolly">
                    <Link to="/shoppingCart">
                        <span className="badge badge-primary">
                        <i  className="fas fa-shopping-cart"></i>
                            {props.productsCount}
                        </span>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;