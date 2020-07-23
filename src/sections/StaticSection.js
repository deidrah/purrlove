import React from 'react';

function StaticSection(props) {
  return (
    <div class="static-container">
      <h1>{props.title}</h1>
      <div class="static-content">
        {props.children}
      </div>
    </div>
  );
}

export default StaticSection;
