import React, { Component } from 'react';
import cover from '../img/aboutuscover7.jpg';
import './aboutus.css';
import line from '../img/line.png';
import vision from '../img/vision.jpg';
import mission from '../img/mission.jpg';
import value from '../img/values.jpg';


class AboutUs extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                    <div className="aboutus-body">
                        <div className="cover">
                            <img className="aboutus-cover-img" src={cover} alt=""/>
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4">
                                <h1 className="brand-title">
                                    Lettuce
                                </h1>
                                <div className="breakline">
                                    <img src={line} alt="" width="200" height="60" />
                                </div>
                                <p>
                                Lettuce is an online grocery stor, which plants every product it presents.
                                An organic vegetables and fruit healthy for everyone.
                                We care about your health so we plants all in our farm
                                in the best conditions to produce the best product.
                                </p>
                            </div>
                        </div>
                        <div className="row text-center m-2 shadow vision-cart">
                    <div className="col-lg-6">
                        <img className="vision-img" src={vision} alt=""/>
                    </div>
                    <div className="col-lg-6">
                    <div className="vision m-2">
                        <h1>Our Vision</h1>
                        <p>The health of our customer is our vision,
                            
                        </p>
                    </div>
                    </div>  
                </div>
                <div className="row text-center m-2 shadow mission-cart">
                    <div className="col-lg-6">
                        <div className="mission m-2">
                            <h1>Our Mission</h1>
                            <p>We take care of our products starting 
                                from the farm untill deliver to our customers 
                                in the best conditions as if they are just
                                picked them up.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="mission-img" src={mission} alt=""/>
                    </div>  
                </div>
                <div className="row text-center m-2 shadow value-cart">
                    <div className="col-lg-6">
                        <img className="value-img" src={value} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="value m-2">
                            <h1>Our Values</h1>
                            <p>We're trying to present the highest quality of our
                                 products and provide what our customer 
                                 requests with most appropriate prices.</p>
                        </div>
                    </div>  
                </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default AboutUs;