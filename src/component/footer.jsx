import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import fb from '../img/fbc.png';
import ph from '../img/tpc.png';
import email from '../img/mailc.png';
import whats from '../img/whatsc.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer className="main-footer">
                    <div className="container-fluid text-center">
                        <div className="row justify-content-center ">
                            <div className="col-lg-4 col-md-4 m-2">
                                <div className="redirect">
                                    <Link className="redirect-link" to='/home'>Home</Link>
                                </div>
                                <div className="redirect">
                                    <Link className="redirect-link" to='/home'>About us</Link>
                                </div>
                                <div className="redirect">
                                    <Link className="redirect-link" to='/home'>Contact us</Link>
                                </div>
                            </div>
                        {/* <hr/> */}
                            <div className="col-lg-4 col-md-4 m-2">
                                <div className="redirect">
                                    <Link className="redirect-link" to='/home'>Products</Link>
                                </div>
                                <div className="redirect">
                                    <Link className="redirect-link" to='/home'>Your Trolley</Link>
                                </div>
                                <div className="redirect">
                                    <Link className="redirect-link" to='/login'>Login</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <hr/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contacts">
                                    <a href="https://www.facebook.com/">
                                        <img className="fb-contact-img" src={fb} alt="" />
                                    </a>
                                    <a href='https://www.gmail.com/'>
                                        <img className="email-contact-img" src={email} alt="" />
                                    </a>
                                    <a href='https://www.whatsapp.com/'>
                                        <img className="whats-contact-img" src={whats} alt=""/>
                                    </a>
                                    <a href='01208202453'>
                                        <img className="ph-contact-img" src={ph} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <small>&copy;Copyright 2021, All Rights Reseved</small>
                        </div>
                    </div>
                </footer>
            </React.Fragment>

         );
    }
}
 
export default Footer;