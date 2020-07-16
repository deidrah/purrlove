import React from 'react';
import Header from './components/Header';

function Checkout() {
  return (
<div class="container">
<Header />
        <div id="checkout">
            <h2>Twoje produkty</h2>
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

export default Checkout;
