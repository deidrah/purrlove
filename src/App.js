import React from 'react';

function App() {
  return (
    <div class="container">
    <header>
        <nav class="nav-col">
            <ul>
                <li><a href="subpages.html">Kim jesteśmy?</a></li>
                <li><a href="categories.html">Legowiska</a></li>
            </ul>
        </nav>
        <a href="index.html"><div id="logo" class="nav-col">
        </div></a>
        <div id="actions" class="nav-col">
            <a href="checkout.html">Twoje produkty: <div id="cart">4</div></a>
        </div>
    </header>
    <div id="slider" class="owl-carousel">
        <div class="slider-col pastel">
            <div class="slide-content">
                <div class="slide-title-one">
                </div>
                <div class="slider-text">Mauris at felis pharetra,<br />pulvinar nunc</div>
                <button class="button-one">Zobacz</button>
                <div class="legowisko legowisko-one"></div>
            </div>
        </div>
        <div class="slider-col zielnik">
            <div class="slide-content">
                <div class="slide-title-two">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <button class="button-two">Zobacz</button>
                <div class="legowisko legowisko-two"></div>
            </div>
        </div>
        <div class="slider-col hipnoza">
            <div class="slide-content">
                <div class="slide-title-three">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <button class="button-three">Zobacz</button>
                <div class="legowisko legowisko-three"></div>
            </div>
        </div>
        <div class="slider-col pastel">
            <div class="slide-content">
                <div class="slide-title-one">
                </div>
                <div class="slider-text">Mauris at felis pharetra,<br />pulvinar nunc</div>
                <button class="button-one">Zobacz</button>
                <div class="legowisko legowisko-one"></div>
            </div>
        </div>
        <div class="slider-col zielnik">
            <div class="slide-content">
                <div class="slide-title-two">
                </div>
                <div class="slider-text">Ut enim ad minim veniam, quis<br />nostrud</div>
                <button class="button-two">Zobacz</button>
                <div class="legowisko legowisko-two"></div>
            </div>
        </div>
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
    <div id="recommended">
        <h2 class="title">Polecane produkty</h2>
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
        <h2>Dlaczego Twój kot nas pokocha?</h2>
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
    <footer>
        <div id="contact">
            <p>738 892 973</p>
            <p>sklep@purrlove.com</p>
            <p>ul. Szewczyka 1/6 84-300 Lębork</p>
        </div>
        <div id="pages">
            <p><a href="static-complaints.html">Reklamacje i zwroty</a> /
                <a href="static-rules.html">Regulamin sklepu</a> /
                <a href="static-payment.html">Płatność i dostawa</a></p>
        </div>
    </footer>
</div>
  );
}

export default App;
