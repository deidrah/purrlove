import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Product from '../components/Product';
import products from '../config/products';

function RecommendedSection() {
  return (
    <div id="recommended">
      <SectionHeading>Polecane produkty</SectionHeading>
      <div id="product-container">
        {products.filter(product => product.recommended === true).map((product) => (
          <Product name={product.name} price={product.price} model={product.model} imgUrl={product.imgUrl} />
        ))}
      </div>
      <div id="rec-button">
        <Button href="/categories" bgColor="gray" textColor="white" size="big">Pokaż więcej</Button>
      </div>
    </div>
  );
}

export default RecommendedSection;
