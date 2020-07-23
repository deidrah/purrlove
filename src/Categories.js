import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';

function Categories() {
  return (
    <div class="container">
    <Header />
    <HeroSection />

    <div id="catalogue">
        <div id="catalogue-nav">
            <div id="cat">
                <h4>Kategorie</h4>
                <button>usuń filtry</button>
                <ul>
                    <li><a href="#" id="active-paw">Kwiatowe</a></li>
                    <li><a href="#">Vintage</a></li>
                    <li><a href="#">Geometryczne</a></li>
                    <li><a href="#">Marinistyczne</a></li>
                    <li><a href="#">Kocie</a></li>
                    <li><a href="#">Malarskie</a></li>
                </ul>
            </div>
            <div id="models">
                <h4>Modele</h4>
                <ul>
                    <li><a href="#">Koło</a></li>
                    <li><a href="#">Chatka</a></li>
                    <li><a href="#">Kwadrat</a></li>
                </ul>
            </div>
        </div>
        <div id="cat-items">
            <div id="cat-filters">
                <h4>Sortuj</h4>
                <ul>
                    <li><a href="#">Cena rosnąco</a></li>
                    <li><a href="#">Cena malejącco</a></li>
                    <li><a href="#">Nazwa</a></li>
                    <li><a href="#">Popuplarność</a></li>
                </ul>
            </div>
            <div id="product-cat-container">
                <div class="item-col">
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-one">
                        </div>
                        <h3>Tropicana</h3>
                        <span class="model">Model : Koło</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-two"></div>
                        <h3>Vintage Floral</h3>
                        <span class="model">Model : Chatka</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-three">
                        </div>
                        <h3>Morska Piana</h3>
                        <span class="model">Model : Kwadrat</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                </div>
                <div class="item-col">
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-four">
                        </div>
                        <h3>Geometric</h3>
                        <span class="model">Model : Koło</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-five"></div>
                        <h3>Subtle Herbs</h3>
                        <span class="model">Model : Koło</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-six">
                        </div>
                        <h3>Fruity</h3>
                        <span class="model">Model : Kwadrat</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                </div>
                <div class="item-col">
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-seven">
                        </div>
                        <h3>Flamingo</h3>
                        <span class="model">Model : Koło</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-eight"></div>
                        <h3>Darkblue floral</h3>
                        <span class="model">Model : Koło</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                    <div class="item">
                        <div class="action-item">
                            <div class="item-cart"></div>
                        </div>
                        <div class="picture" id="pic-cat-nine">
                        </div>
                        <h3>Galaxy</h3>
                        <span class="model">Model : Kwadrat</span>
                        <span class="price">89.90</span><span class="currency">PLN</span>
                    </div>
                </div>
            </div>
            <div id="pagination">
                <p>
                    <a href="#">
                        &lt;&lt; Poprzednia strona</a> /
                            <a href="#">Następna strona >></a></p>
            </div>
        </div>
    </div>
    <Footer />
</div>
  );
}

export default Categories;
