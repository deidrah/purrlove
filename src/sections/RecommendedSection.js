import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Product from '../components/Product';

function RecommendedSection() {
  return (
    <div id="recommended">
      <SectionHeading>Polecane produkty</SectionHeading>
      <div id="product-container">
        <Product name="Princess Dream" price={89.90} model="Koło" />
        <Product name="Tropicana" price={89.90} model="Koło" />
        <Product name="Zorba" price={89.90} model="Kwadrat" />
        <Product name="Morska Piana" price={89.90} model="Kwadrat" />
      </div>
      <div id="rec-button">
        <Button href="/categories" bgColor="gray" textColor="white" size="big">Pokaż więcej</Button>
      </div>
    </div>
  );
}

export default RecommendedSection;
