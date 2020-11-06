import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export default class CartItem extends Component {
  render() {
    const { price, quantity, title, onRemove } = this.props

    const deleteAction = (
      <div  style={{float: 'right'}} onClick={onRemove}><i className="fa fa-trash" aria-hidden="true"></i></div>
      // <button  style={{float: 'right'}} onClick={onRemove}>
      //   {'Delate'}
      // </button>
      // <i className="fa fa-spinner fa-spin">no spinner but why</i><i class="fa fa-trash-o" aria-hidden="true"></i>
      //https://fontawesome.com/v4.7.0/icons/  use version 4 for awsome
    )

    return (

      //<Product price={price} quantity={quantity} title={title} action={<button style={{float: 'right'}} onClick={onRemove}>{'Delate'}</button>} />
      <div style={{ marginBottom: 20 }}>
        <Product price={price} quantity={quantity} title={title} action={deleteAction} />
      </div>
    )
  }
}

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
}
