import React from 'react';

import './Product.scss';

function Product(props) {
  return (
    <div class="item">
      <div class="action-item">
        <div class="item-cart"></div>
      </div>
      <img src={props.imgUrl} class="picture" alt={props.name} />
      <h3>{props.name}</h3>
      <span class="model">Model : {props.model}</span>
      <span class="price">{props.price}</span><span class="currency">PLN</span>
    </div>
  );
}

export default Product;
