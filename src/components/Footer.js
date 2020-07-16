import React from 'react';

function Footer(props) {
  return (
    <footer id={props.id}>
      {props.showContact !== false ? (
        <div id="contact">
          <p>738 892 973</p>
          <p>sklep@purrlove.com</p>
          <p>ul. Szewczyka 1/6 84-300 Lębork</p>
        </div>
      ) : ''}
      <div id="pages">
        <p>
          <a href="static-complaints.html">Reklamacje i zwroty</a> /
          <a href="static-rules.html">Regulamin sklepu</a> /
          <a href="static-payment.html">Płatność i dostawa</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
