import React from 'react';
import { Link } from 'wouter';

import './Button.scss';

function Button(props) {
  const { size, bgColor, textColor, href, type, children } = props;

  const buttonClass = `button button-size-${size} button-bg-${bgColor} button-text-${textColor}`;

  return href
    ? (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
    : (
      <button type={type} className={buttonClass}>
        {children}
      </button>
    );
}

export default Button;
