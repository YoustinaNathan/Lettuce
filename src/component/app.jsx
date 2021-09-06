import React, { Component } from 'react';
import {Route , Switch , Redirect} from "react-router-dom";
import NavBar from './navbar';
import Home from './home';
import AboutUs from './aboutus';
import Contacts from './contacts';
import ShoppingCart from './shoppingCart';
import Footer from './footer';
import Product from './product';
import notFound from './notfound';
import LogIn from './login';

import apple from '../img/apple.jpg';
import broccoli from '../img/broccoli.jpg';
import cabbage from '../img/Cabbage.jpg';
import carrots from '../img/carrots.jpg';
import cucumber from '../img/cucumber.jpg';
import eggplant from '../img/eggplant.jpg';
import lettuce from '../img/lettuce.jpg';
import okra from '../img/okra.jpg';
import tomato from '../img/tomato.jpg';
import papper from '../img/papper.jpg';
import peas from '../img/peas.jpg';
import onion from '../img/onion.jpg';

class App extends Component {
    state = { 
        products:[
            {id:1, name:"Apple", price:15, photo:apple, amount:0},
            {id:2, name:"Broccoli", price:10, photo:broccoli, amount:0},
            {id:3, name:"Cabbage", price:5, photo:cabbage, amount:0},
            {id:4, name:"Carrots", price:8, photo:carrots, amount:0},
            {id:5, name:"Cucumber", price:5, photo:cucumber, amount:0},
            {id:6, name:"Eggplant", price:9, photo:eggplant, amount:0},
            {id:7, name:"Papper", price:2, photo:papper, amount:0},
            {id:8, name:"Lettuce", price:2, photo:lettuce, amount:0},
            {id:9, name:"Okra", price:9, photo:okra, amount:0},
            {id:10, name:"Peas", price:7, photo:peas, amount:0},
            {id:11, name:"Tomato", price:2, photo:tomato, amount:0},
            {id:12, name:"Onion", price:4, photo:onion, amount:0},
        ],
        receipt:0,
    };
    
    handleReset = () =>{
        //Clone
        let products = [...this.state.products];
        //Edit
        products = products.map(p => {
            p.amount = 0 ;
            return p;
        });
        //Set state
        this.setState ({products});
    };

    handleCheck = () => {
        //Clone
        let receipt = 0;
        let products = [...this.state.products];
        //Edit
        products = products.map(p => {
            receipt = receipt + ( p.amount * p.price );
            return receipt;
            // return p;
        });
        console.log(receipt);
        //Set State
        this.setState({ receipt });
    };

    
    IncrementHandler = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        products[index].amount++;
        //Set State
        this.setState({ products });
    };

    DecrementHandler = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        if(products[index].amount > 0){
            products[index].amount--;
        }
        //Set State
        this.setState({ products });
    };

    // handleDelete = (product) => {
    //     //clone
    //     //edit
    //     //set state

    //     const newProduct = this.state.products.filter((p)=> p.id !== product.id);
    //     this.setState({products: newProduct});
    // }

    handleadd = (product) => {
        //clone
        let products = [...this.state.products];
        const index = products.indexOf(product);
        products= [...products[index]];

        //edit
        //set state
        this.setState({products});
    }

    handleDelete = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        //Edit
        products.splice(index, 1);
        //Set State
        this.setState({ products });
      };
      
      handleInCartChange = (product) => {
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        products[index].isInCart = !products[index].isInCart;
        //Set State
        this.setState({ products });
      };


    render() { 
        return ( 
            <React.Fragment>
                <NavBar
                productsCount={this.state.products.filter((p) => p.isInCart).length}
              />
                <main className="container">
                <Switch>
                    <Route exact path='/home' render={props => (
                        <Home 
                        {...props}
                        products = {this.state.products}
                        onClick={this.handleadd}
                        />
                    )}/>
                    <Route exact path='/aboutus' component={AboutUs}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/login' component={LogIn}/>
                    {/*? optional route parameter*/}

                    <Route exact path='/product' exact
                    render={props => (
                        <Product 
                            {...props}
                            products = {this.state.products}
                            onClick={this.handleInCartChange}
                            />
                    )}/>
                    <Route exact path="/shoppingcart"
                    render={(props) => (
                        <ShoppingCart
                        products={this.state.products.filter((p) => p.isInCart)}
                        receipt={this.state.receipt}
                        onIncrement={this.IncrementHandler}
                        onDecrement={this.DecrementHandler}
                        onDelete={this.handleInCartChange}
                        onReset={this.handleReset}
                        onCheck={this.handleCheck}
                        {...props}
                        />
                    )}
                    />
                    <Route path="/notfound" component={notFound} />
                    <Redirect from="/" to="/notfound" />
                    </Switch>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default App;