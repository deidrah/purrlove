import React from 'react';

import './SectionHeading.scss';

function SectionHeading(props) {
  return (
    <h2 class="section-heading">{props.children}</h2>
  );
}

export default SectionHeading;
