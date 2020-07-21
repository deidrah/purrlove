import React from 'react';
import Slider from "react-slick";
import SectionHeading from '../components/SectionHeading'
import SliderArrow from '../components/SliderArrow';



function ReviewSection() {
  var settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />
  };

  return (
    <div id="reviews">
      <SectionHeading>Zobacz kto nas pokochał</SectionHeading>
      <Slider className="slider" {...settings}>
        <div>
          <div class="rev-slide">
            <img src="img/zdj.png" alt="" />
            <div class="points">
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_transp.png" alt="" />
            </div>
            <div class="rev-descr">
              <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris
                ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
              <p>Mela, 22.05.2017</p>
            </div>
          </div>
        </div>
        <div>
          <div class="rev-slide">
            <img src="img/zdj.png" alt="" />
            <div class="points">
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_transp.png" alt="" />
            </div>
            <div class="rev-descr">
              <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris
                ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
              <p>Mela, 22.05.2017</p>
            </div>
          </div>
        </div>
        <div>
          <div class="rev-slide">
            <img src="img/zdj.png" alt="" />
            <div class="points">
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_full.png" alt="" />
              <img src="img/paw_transp.png" alt="" />
            </div>
            <div class="rev-descr">
              <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris
                ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
              <p>Mela, 22.05.2017</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ReviewSection;