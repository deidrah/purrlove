import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ReviewSection from './sections/ReviewSection';
import BenefitSection from './sections/BenefitSection'

function About() {
  return (
    <>
      <div class="container">
        <Header />
        <AboutSection>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </AboutSection>
      </div>
      <BenefitSection />
      <ReviewSection />
      <ContactSection />
      <Footer id="sub-footer" showContact={false} />
    </>
  );
}

export default About;
