import React from 'react';
import { Link } from 'wouter';

function Button(props) {
  const buttonClass = `button button-size-${props.size} button-bg-${props.bgColor} button-text-${props.textColor}`;

  return props.href
    ? (
      <Link href={props.href} className={buttonClass}>
        {props.children}
      </Link>
    )
    : (
      <button type={props.type} className={buttonClass}>
        {props.children}
      </button>
    );
}

export default Button;
