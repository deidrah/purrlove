import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHeading from './components/SectionHeading';

function Checkout() {
  return (
<div class="container">
<Header />
        <div id="checkout">
            <SectionHeading>Twoje produkty</SectionHeading>
            <div class="container">
                <div class="checkout-row">
                    <div class="row-name">
                        <img src="img/item-fruity.png" alt="" />
                        <p>Fruity</p>
                    </div>
                    <div class="row-info">
                        <p>85.00 PLN</p>
                        <p><a href="#">USUŃ</a></p>
                    </div>
                </div>
                <div class="checkout-row">
                    <div class="row-name">
                        <img src="img/item-flamingo.png" alt="" />
                        <p>Flamingo</p>
                    </div>
                    <div class="row-info">
                        <p>85.00 PLN</p>
                        <p><a href="#">USUŃ</a></p>
                    </div>
                </div>
                <div class="checkout-row">
                    <div class="row-name">
                        <img src="img/item-galaxy.png" alt="" />
                        <p>Galaxy</p>
                    </div>
                    <div class="row-info">
                        <p>85.00 PLN</p>
                        <p><a href="#">USUŃ</a></p>
                    </div>
                </div>
                <div class="checkout-row">
                    <div class="row-name">
                        <img src="img/item-herbs.png" alt="" />
                        <p>Subtle herbs</p>
                    </div>
                    <div class="row-info">
                        <p></p>
                        <p>85.00 PLN</p>
                        <p><a href="#">USUŃ</a></p>
                    </div>
                </div>
                <div class="checkout-data">
                   <h2>Adres dostawy</h2>
                    <form id="checkout-address" method="get">
                        <input type="text" placeholder="Imię i Nazwisko" />
                    <input type="text" placeholder="Ulica oraz nr domu" />
                    <input type="text" placeholder="Kod pocztowy i miasto" />
                    </form>
                </div>
                <div class="checkout-delivery">
                    <h2>Dostawa</h2>
                    <input type="radio" name="delivery" id="delivery-one" /><label for="delivery-one">Za pobraniem - 15zł</label>
                    <input type="radio" name="delivery" id="delivery-two" /><label for="delivery-two">Przedpłata - 10zł</label>
                    <input type="radio" name="delivery" id="delivery-three" /><label for="delivery-three">Odbiór osobisty - 0zł</label>
                </div>
                <div class="checkout-sumup">
                    <p>SUMA: 100zł</p>
                    <input type="submit" value="Zamów" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Checkout;
