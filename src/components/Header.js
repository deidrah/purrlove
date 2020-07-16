import React from 'react';

function Header() {
  return (
    <header>
      <nav class="nav-col">
        <ul>
          <li><a href="subpages.html">Kim jesteśmy?</a></li>
          <li><a href="categories.html">Legowiska</a></li>
        </ul>
      </nav>
      <a href="index.html">
        <div id="logo" class="nav-col" />
      </a>
      <div id="actions" class="nav-col">
        <a href="checkout.html">Twoje produkty: <div id="cart">4</div></a>
      </div>
    </header>
  );
}

export default Header;
