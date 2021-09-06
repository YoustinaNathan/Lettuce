import React from 'react';
import line from '../img/line.png';
import './product.css';
import Cart from './cart';

const Product = (props) => {
    return(
        <React.Fragment>
           <div className="body">
                <div className="container text-center"> 
                    <h1 className="pageheader">Our Products</h1>
                    <div className="breakline">
                        <img src={line} alt="" width="400" height="60" />
                    </div>
                    
                    <table className="table table-hover center">
                        <tbody>
                            {props.products.map(product => (
                            <tr className="tablerow" key={product.id}>
                                <td><img className="item-img" src={product.photo} alt="" width="100" height="100"/></td>
                                <td className="item-name">{product.name}</td>
                                <td className="item-price">{product.price}EGP</td>
                                <td>
                                <Cart onClick={props.onClick} product={product} />
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Product;