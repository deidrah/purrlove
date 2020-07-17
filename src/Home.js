import React from 'react';
import Slider from "react-slick";
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHeading from './components/SectionHeading';

function Home() {

    var settings = {
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div class="container">
    <Header />

    <Slider className="slider" {...settings}>
        <div class="slide">
        <div class="slider-col pastel">
            <div class="slide-content">
                <div class="slide-title-one">
                </div>
                <div class="slider-text">Mauris at felis pharetra,<br />pulvinar nunc</div>
                <button class="button-one">Zobacz</button>
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
                <button class="button-two">Zobacz</button>
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
                <button class="button-three">Zobacz</button>
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
                <button class="button-one">Zobacz</button>
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
                <button class="button-two">Zobacz</button>
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
                <button class="button-three">Zobacz</button>
                <div class="legowisko legowisko-three"></div>
            </div>
        </div>
        </div>
      </Slider>

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
            <div class="button"><a href="categories.html">Pokaż więcej</a></div>
        </div>
    </div>
    <div id="about">
        <SectionHeading>Dlaczego Twój kot nas pokocha?</SectionHeading>
        <div id="cat-photo" class="half"></div>
        <div id="cat-text" class="half">
            <div id="about-container">
                <div class="about-title">Szyjemy</div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <div class="button"><a href="subpages.html#about">Więcej o nas</a></div>
            </div>
        </div>
    </div>
    <div id="newsletter">
        <p>Chcesz być powiadamiany o kocich nowościach?<span>Zapisz się do newslettera!</span></p>
        <input type="email" name="email" placeholder="Wpisz adres e-mail" />
        <input type="submit" name="submit" value="Wyślij" />
    </div>
    <Footer />
</div>
  );
}

export default Home;
