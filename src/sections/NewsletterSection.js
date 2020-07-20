import React from 'react';
import Button from '../components/Button';

function NewsletterSection() {
  return (
    <div id="newsletter">
        <p>Chcesz być powiadamiany o kocich nowościach?<span>Zapisz się do newslettera!</span></p>
        <input type="email" name="email" placeholder="Wpisz adres e-mail" />
        <Button type="submit" bgColor="blue" textColor="white" size="big">Wyślij</Button>
    </div>
  );
}

export default NewsletterSection;
