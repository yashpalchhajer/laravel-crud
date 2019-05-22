import React, { Component } from 'react';

const Product = props => {

  const {
    product,
    handleDelete,
    handleEdit,
    update
  } = props;

  const divStyle = {}

  if(!product){
    return(<div style={divStyle}> Product Doesnt exists </div>);
  }

  return(
    <div style={divStyle}>
      <h2> {product.title} </h2>
      <p> {product.description} </p>
      <h3> Statue {product.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.price} </h3>
      <button onClick={ e => handleDelete()}>
        Delete
      </button>
    </div>
  )
}

export default Product;
