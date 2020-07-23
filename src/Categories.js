import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';
import Pagination from './components/Pagination';
import Product from './components/Product';

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
                    <Product name="Tropicana" price={89.90} model="Koło" />
                    <Product name="Vintage Floral" price={89.90} model="Chatka" />
                    <Product name="Morska Piana" price={89.90} model="Kwadrat" />
                </div>
                <div class="item-col">
                    <Product name="Geometric" price={89.90} model="Koło" />
                    <Product name="Subtle Herbs" price={89.90} model="Koło" />
                    <Product name="Fruity" price={89.90} model="Kwadrat" />
                </div>
                <div class="item-col">
                    <Product name="Flamingo" price={89.90} model="Koło" />
                    <Product name="Darkblue floral" price={89.90} model="Koło" />
                    <Product name="Galaxy" price={89.90} model="Kwadrat" />
                </div>
            </div>
            <Pagination />
        </div>
    </div>
    <Footer />
</div>
  );
}

export default Categories;
