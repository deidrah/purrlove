import React from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading'

function ContactSection() {
  return (
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

  );
}

export default ContactSection;
