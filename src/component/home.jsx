import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import line from '../img/line.png';
// import Slider from 'react-rangeslider';
import './home.css';
import vision from '../img/ourvision.jpg';
import mission from '../img/ourmission.jpg';
import value from '../img/ourvalues.jpg';
import step1 from '../img/step01.png';
import step2 from '../img/step02.png';
import step3 from '../img/step03.png';
import step4 from '../img/step04.png';


const Home = (props) => {
    // const products = this.props.products.filter(c => c.id < 3);
    return ( 
        <React.Fragment>
            {/* banner part--------------------------------------------------------*/}
            <div className="home">
            <header class="home-banner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <div class="main-banner-content">
                                <h1>Lettuce</h1>
                                <p>Whatever You Need You Will Find It Here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* welcome part--------------------------------------------------------*/}
            <section className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <h1 className="welcome">Welcome to Lettuce</h1>
                        <div className="breakline">
                            <img src={line} alt="" width="400" height="60" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <p className="welcome text-center">Welcome to Lettuce. We grow vegetables in our farms and  an online shopping website where you can find many organic goods you need daily.
                                    Lettuce brings you anything you need fast and fresh.
                        </p>
                    </div>
                </div>    
            </section>

            {/* products part--------------------------------------------------------*/}
            <section className="reviews-slider">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        {props.products.map(product => (
                                <div className="col-lg-3 col-md-3 col-sm-3" key={product.id}> 
                                    <div id="review-slider-holder">
                                        <ul id="light-slider">
                                            <li className="card shadow">
                                                <div className="card-body">
                                                    <img className="card-img" src={product.photo} alt=""/>
                                                    <h6 className="card-title">{product.name}</h6>
                                                    <span className="card-price">{product.price} LE</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        ))}
                            <div className="col-lg-3 col-md-3 col-sm-3 m-2"> 
                                <Link className="linknav" to="/product">Shop now</Link>
                            </div>
                    </div>
                </div>
            </section>

            {/*how it works--------------------------------------------------------*/}
            <section className="steps">
            <div className="container">
            <div className="row justify-content-center text-center">
                <h1 className="steps-title">How it works?</h1>
            </div>  
                <div className="row justify-content-center text-center">
                    <div className="col-lg-3 col-md-3">
                        <div className="stepcard">
                            <div className="step-card-body">
                                <img src={step1} class="img step-img img-fluid" alt=""/>
                                <p>First choose any product you need from products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="stepcard">
                            <div className="step-card-body">
                                <img src={step2} class="img step-img img-fluid" alt=""/>
                                <p>Go to the trolley and define how many kilos you need.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="stepcard">
                            <div className="step-card-body">
                                <img src={step3} class="img step-img img-fluid" alt=""/>
                                <p>Provid us with your information to contact you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="stepcard">
                            <div className="step-card-body">
                                <img src={step4} class="img step-img img-fluid" alt=""/>
                                <p>Finally enjoy with our products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            {/*how it works*/}

            {/* info about us part--------------------------------------------------------*/}
            <section className="info">
                <div className="container">
                    <div className="row justify-content-center text-center">

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="aboutcard">
                                <div className="about-card-body">
                                    <img src={vision} class="img img-fluid" alt=""/>
                                    <h1>Our Vision</h1>
                                    <p>Be a globalized house of brands organization,
                                            which builds sustainable business relationships
                                            with our customers.
                                    </p>
                                    <NavLink className="readbtn" to="/aboutus">Read more.</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="aboutcard">
                                <div className="about-card-body">
                                    <img src={mission} class="img img-fluid" alt=""/>
                                    <h1>Our Mission</h1>
                                    <p>We take care of our products starting from the farm
                                            till reach our customers in the best conditions as if they are just picked.</p>
                                    <NavLink className="readbtn" to="/aboutus">Read more.</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="aboutcard">
                                <div className="about-card-body">
                                    <img src={value} class="img img-fluid" alt=""/>
                                    <h1>Our Values</h1>
                                    <p>We strive to achieve the highest quality of our products
                                            and access to what the customer requests.</p>
                                    <NavLink className="readbtn" to="/aboutus">Read more.</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        </React.Fragment>
    );
    }
export default Home;