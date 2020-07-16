import React from 'react';
import Header from './components/Header';

function About() {
  return (
    <>
    <div class="container">
    <Header />
        <div id="about" class="sub-about">
            <h2>Dlaczego Twój kot nas pokocha?</h2>
            <div id="cat-photo" class="half"></div>
            <div id="cat-text" class="half">
                <div id="about-container">
                    <div>Szyjemy</div>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>
        </div>
        <div id="benefits">
            <div class="container">
                <div class="benefit">
                    <img src="img/icon_sub_1.png" alt="" />
                    <h3>Dopracowane</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
                <div class="benefit">
                   <img src="img/icon_sub_2.png" alt="" />
                    <h3>Wygodne</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
                <div class="benefit">
                   <img src="img/icon_sub_3.png" alt="" />
                    <h3>Bezpieczne</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
            </div>
        </div>
        <div id="reviews">
           <h2>Zobacz kto nas pokochał</h2>
            <div class="owl-carousel">
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
                    <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
                    <p>Mela, 22.05.2017</p>
                </div>
                </div>
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
                    <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
                    <p>Mela, 22.05.2017</p>
                </div>
                </div>
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
                    <p><span>"</span>Cras non quam ultricesue nisi. Nunc sodales ultrat,<br /> non porttitor mauris ornare non.<br /> Donec henderit vel velit ac mollis.<span>"</span></p>
                    <p>Mela, 22.05.2017</p>
                </div>
                </div>
                
            </div>
            
        </div>
        <div id="contact-form">
           <div id="mouse"></div>
               <div class="container">
                <h2>Bądźmy w kontakcie</h2>
                <div id="logo-footer"><img src="img/logo.png" alt="" /></div>
                <div id="contact" class="sub-contact">
                    <p>738 892 973</p>
                    <p>sklep@purrlove.com</p>
                    <p>ul. Szewczyka 1/6 84-300 Lębork</p>
                </div>
                <form id="purr-contact" method="get">
                    <input type="text" placeholder="wpisz swój adres e-mail" />
                    <input type="text" placeholder="napisz do nas wiadomość" />
                    <input type="submit" value="WYŚLIJ" />
                </form>
                <div id="socials">
                    <a href="#"><i class="icon-facebook-squared"></i></a>
                    <a href="#"><i class="icon-twitter"></i></a>
                    <a href="#"><i class="icon-google-plus-circle"></i></a>
                </div>
    </div>
        </div>
        <footer id="sub-footer">
            <div id="pages">
                <p><a href="static-complaints.html">Reklamacje i zwroty</a> /
                    <a href="static-rules.html">Regulamin sklepu</a> /
                    <a href="static-payment.html">Płatność i dostawa</a></p>
            </div>
        </footer>
        </>
  );
}

export default About;
