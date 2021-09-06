import React, { Component } from 'react';
import './busket.css';
// import {Link} from 'react-router-dom';


class Busket extends Component {
    getClasses() {
        return this.props.product.amount === 0
          ? "badge badge-warning m-2"
          : "badge badge-primary m-2";
      }
    
      render() {
        const { product, onIncrement, onDelete, onDecrement } = this.props;
        return (
          <React.Fragment>
            <div className="row justify-content-center item">
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="item-img">
                  <img className="item-img" src={product.photo} alt=""/>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                  {/* <Link className="item-name" to={`/products/${product.id}`}>{product.name}</Link> */}
                  <h5 className="item-name">{product.name}</h5>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                {/* <span className= {this.getClasses()} >{product.amount}</span> */}
                <h5 className="item-amount">{product.amount}Kg</h5>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="item-increment">
                  <span
                    onClick={() => onDecrement(product)}
                    className="btn btn-sm"
                  ><i class="fas fa-minus"></i></span>
                  <span
                    onClick={() => onIncrement(product)}
                    className="btn btn-sm"
                  ><i class="fas fa-plus"></i></span>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="item-delete">
                  <span className="btn btn-sm" style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
                    <i className="fas fa-trash" />
                  </span>
                </div>
              </div>
            </div>
            
          </React.Fragment>
        );
      }
    }
 
export default Busket;