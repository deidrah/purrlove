import React from 'react';
import SectionHeading from '../components/SectionHeading';

function AboutSection(props) {
  return (
    <div id="about">
        <SectionHeading>Dlaczego Twój kot nas pokocha?</SectionHeading>
        <div id="cat-photo" class="half"></div>
        <div id="cat-text" class="half">
            <div id="about-container">
                <div class="about-title">Szyjemy</div>
                {props.children}
            </div>
        </div>
    </div>
  );
}

export default AboutSection;
