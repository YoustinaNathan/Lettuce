import React from 'react';
import './notfound.css';
import { Link } from 'react-router-dom';

const notFound = () => {
    return ( 
        <React.Fragment>
            <div className="notfound-body">
                <h1 className="oops">OOPS!</h1>
                <p className="message">The page you are looking for can't be found</p>
                <Link className="to-home" to="./home">Go To Home</Link>
            </div>
        </React.Fragment>
    );
}
 
export default notFound;