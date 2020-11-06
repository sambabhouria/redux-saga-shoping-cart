import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import ProductList from './ProductList'
import Cart from './Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr />
        <ProductList />
        <hr />
        <Cart />
      </div>
    )
  }
}
