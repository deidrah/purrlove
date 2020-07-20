import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function RecommendedSection() {
  return (

    <div id="recommended">
        <SectionHeading>Polecane produkty</SectionHeading>
        <div id="product-container">
            <div class="item">
                <div class="action-item">
                    <div class="item-cart"></div>
                </div>
                <div class="picture" id="pic-one">
                </div>
                <h3>Princess Dream</h3>
                <span class="model">Model : Koło</span>
                <span class="price">89.90</span><span class="currency">PLN</span>
            </div>
            <div class="item">
                <div class="action-item">
                    <div class="item-cart"></div>
                </div>
                <div class="picture" id="pic-two"></div>
                <h3>Tropicana</h3>
                <span class="model">Model : Koło</span>
                <span class="price">89.90</span><span class="currency">PLN</span>
            </div>
            <div class="item">
                <div class="action-item">
                    <div class="item-cart"></div>
                </div>
                <div class="picture" id="pic-three">
                </div>
                <h3>Zorba</h3>
                <span class="model">Model : Kwadrat</span>
                <span class="price">89.90</span><span class="currency">PLN</span>
            </div>
            <div class="item">
                <div class="action-item">
                    <div class="item-cart"></div>
                </div>
                <div class="picture" id="pic-four">
                </div>
                <h3>Morska Piana</h3>
                <span class="model">Model : Kwadrat</span>
                <span class="price">89.90</span><span class="currency">PLN</span>
            </div>
        </div>
        <div id="rec-button">
            <Button href="/categories" bgColor="gray" textColor="white" size="big">Pokaż więcej</Button>
        </div>
    </div>

  );
}

export default RecommendedSection;
