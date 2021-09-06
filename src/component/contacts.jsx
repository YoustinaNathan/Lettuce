import React from 'react';
import './contacts.css';
import location from '../img/location.jpg';
import call from '../img/call.jpg';
import mail from '../img/mail.jpg';
import line from '../img/line.png';


const Contacts = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="banner">
                </div>
                <div className="row justify-content-center text-center m-2 title">
                    <div className="col-lg-6 col-md-6">
                        <h1>Contacts</h1>
                        <img src={line} alt="" width="300" height="60" />
                    </div>
                </div>
                <div className="row text-center loaction-row shadow">
                    <div className="col-lg-6 col-md-6">
                        <img className="location-img" src={location} alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="address">12st. Galal Moawaad, Shoubra Elkhima, Egypt.</div>
                    </div>  
                </div>
                <div className="row text-center call-row shadow">
                    <div className="col-lg-6 col-md-6">
                        <div className="call">01208202453</div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img className="call-img" src={call} alt=""/>
                        
                    </div>  
                </div>
                <div className="row text-center mail-row shadow">
                    <div className="col-lg-6 col-md-6">
                        <img className="mail-img" src={mail} alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="mail">yooustinanathan.cis@outlook.com</div>
                    </div>  
                </div>
                
                <div className="row msg-form text-center justify-content-center">
                    <div className="col-lg-5 col-md-5">
                        <h2>Leave a message</h2>
                        <input type="text" className="form-control message-form m-1" id="inputname" placeholder="Full Name"/>
                        <input type="text" className="form-control message-form m-1" id="inputemail" placeholder="Email"/>
                        <input type="tel" className="form-control message-form m-1" id="inputphone" placeholder="Phone"/>
                        <textarea className="form-control message m-1" id="inputmessage" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="btn m-2">Submit</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Contacts;