import React from 'react';
import { Link } from "wouter";

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
          <Link href="/complaints">Reklamacje i zwroty</Link> /
          <Link href="/rules">Regulamin sklepu</Link> /
          <Link href="/payment">Płatność i dostawa</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
