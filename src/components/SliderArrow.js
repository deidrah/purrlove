import React from 'react';

import './SliderArrow.scss';

function SliderArrow(props) {
  const sliderArrowClassName = `slider-arrow slider-arrow-direction-${props.direction}`;

  return (
    <button type="button" className={sliderArrowClassName} onClick={props.onClick}>
      <svg viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
}

export default SliderArrow;
