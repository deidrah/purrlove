import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Button from './components/Button';
import AboutSection from './sections/AboutSection';
import SectionHeading from './components/SectionHeading'

function About() {
  return (
    <>
    <div class="container">
    <Header />
    <AboutSection>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </AboutSection>
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
           <SectionHeading>Zobacz kto nas pokochał</SectionHeading>
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
                <SectionHeading>Bądźmy w kontakcie</SectionHeading>
                <div id="logo-footer"><img src="img/logo.png" alt="" /></div>
                <div id="contact" class="sub-contact">
                    <p>738 892 973</p>
                    <p>sklep@purrlove.com</p>
                    <p>ul. Szewczyka 1/6 84-300 Lębork</p>
                </div>
                <form id="purr-contact" method="get">
                    <input type="text" placeholder="wpisz swój adres e-mail" />
                    <input type="text" placeholder="napisz do nas wiadomość" />
                    <Button type="submit" bgColor="pink" textColor="white" size="big">Wyślij</Button>
                </form>
                <div id="socials">
                    <a href="#"><i class="icon-facebook-squared"></i></a>
                    <a href="#"><i class="icon-twitter"></i></a>
                    <a href="#"><i class="icon-google-plus-circle"></i></a>
                </div>
    </div>
        </div>
        <Footer id="sub-footer" showContact={false} />
        </>
  );
}

export default About;
