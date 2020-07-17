import React from 'react';
import { Link } from "wouter";

function Header() {
  return (
    <header>
      <nav className="nav-col">
        <ul>
          <li><Link href="/about">Kim jesteśmy?</Link></li>
          <li><Link href="/categories">Legowiska</Link></li>
        </ul>
      </nav>
      <a href="/">
        <div id="logo" className="nav-col" />
      </a>
      <div id="actions" className="nav-col">
        <Link href="/checkout">Twoje produkty: <div id="cart">4</div></Link>
      </div>
    </header>
  );
}

export default Header;
