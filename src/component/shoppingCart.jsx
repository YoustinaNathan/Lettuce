import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './shoppingCart.css';
import line from '../img/line.png';
import Busket from './busket';

class ShoppingCart extends Component {
  render() {
    const {products, onReset, onDelete, onIncrement, onDecrement, onCheck, receipt} = this.props;
    return (
      <React.Fragment>
        <div className="body">
          <div className="container"> 
            <div className="shoppingcart text-center">
              <h1 className="page-header">Your Trolley</h1>
              <div className="breakline">
                <img src={line} alt="" width="400" height="60" />
              </div>
              <button
                onClick={onReset}
                className="btn btn-sm m-2"
              >Reset</button>
              {products.map((product) => (
                <Busket
                  key={product.id}
                  product={product}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              ))}
              <button
                onClick={onCheck}
                className="btn btn-sm m-2"
              >Check Sum</button>            
              <div>
                <h5>the price is: {receipt}</h5>
              </div>
              <Link className="login" to="/login">Checkout Now</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
      
    );
  }
}

export default ShoppingCart;
