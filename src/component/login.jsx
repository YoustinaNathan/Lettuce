import React, { Component } from 'react';
import './login.css';

class LogIn extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <div className="main">
                <div className="login-container">
                    <form className="form">
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <label for="firstname" class="form-label m-1">First name</label>
                                <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <label for="lastname" class="form-label m-1">Last name</label>
                                <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <label for="emailaddress" class="form-label m-1">Email address</label>
                                <input type="email" class="form-control" id="emailaddress" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text m-1">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <label for="adress" class="form-label m-1">Address</label>
                                <input type="text" class="form-control" id="adress" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <label for="phone" class="form-label m-1">Phone</label>
                                <input type="tel" class="form-control" id="phone" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-5 col-md-5">
                                <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Connected to whatsApp?</label>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                        <div className="col-lg-3 col-md-3">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
 
export default LogIn;