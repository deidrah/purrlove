import React from 'react';
import Button from '../components/Button';

function HeroSection() {
  return (
    <div id="cat-hero">
      <div class="slider-col slider-container">
        <div class="slider-name"></div>
        <p>Ut enim ad minim veniam,<br />quis nostrud </p>
        <p class="prize">79.90<span>PLN</span></p>
        <Button href="/" bgColor="white" textColor="dark-gray" size="big">Zobacz</Button>
      </div>
    </div>
  );
}

export default HeroSection;
