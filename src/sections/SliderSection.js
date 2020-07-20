import React from 'react';
import Slider from "react-slick";
import Button from '../components/Button';

function SliderSection() {

    var settings = {
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (

    <Slider className="slider" {...settings}>
        <div class="slide">
        <div class="slider-col pastel">
            <div class="slide-content">
                <div class="slide-title-one">
                </div>
                <div class="slider-text">Mauris at felis pharetra,<br />pulvinar nunc</div>
                <Button href="/" bgColor="white" textColor="blue" size="small">Zobacz</Button>
                <div class="legowisko legowisko-one"></div>
            </div>
        </div>
        </div>
        <div class="slide">
        <div class="slider-col zielnik">
            <div class="slide-content">
                <div class="slide-title-two">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <Button href="/" bgColor="white" textColor="green" size="small">Zobacz</Button>
                <div class="legowisko legowisko-two"></div>
            </div>
        </div>
        </div>
        <div class="slide">
        <div class="slider-col hipnoza">
            <div class="slide-content">
                <div class="slide-title-three">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <Button href="/" bgColor="white" textColor="pink" size="small">Zobacz</Button>
                <div class="legowisko legowisko-three"></div>
            </div>
        </div>
        </div>
        <div class="slide">
        <div class="slider-col pastel">
            <div class="slide-content">
                <div class="slide-title-one">
                </div>
                <div class="slider-text">Mauris at felis pharetra,<br />pulvinar nunc</div>
                <Button href="/" bgColor="white" textColor="blue" size="small">Zobacz</Button>
                <div class="legowisko legowisko-one"></div>
            </div>
        </div>
        </div>
        <div class="slide">
        <div class="slider-col zielnik">
            <div class="slide-content">
                <div class="slide-title-two">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <Button href="/" bgColor="white" textColor="green" size="small">Zobacz</Button>
                <div class="legowisko legowisko-two"></div>
            </div>
        </div>
        </div>
        <div class="slide">
        <div class="slider-col hipnoza">
            <div class="slide-content">
                <div class="slide-title-three">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <Button href="/" bgColor="white" textColor="pink" size="small">Zobacz</Button>
                <div class="legowisko legowisko-three"></div>
            </div>
        </div>
        </div>
      </Slider>

  );
}

export default SliderSection;
