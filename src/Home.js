import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Button from './components/Button';
import NewsletterSection from './sections/NewsletterSection';
import AboutSection from './sections/AboutSection';
import RecommendedSection from './sections/RecommendedSection';
import SliderSection from './sections/SliderSection';

function Home() {
  return (
    <div class="container">
      <Header />
      <SliderSection />
      <RecommendedSection />
      <AboutSection>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        <Button href="/about" bgColor="pink" textColor="white" size="big">Więcej o nas</Button>
      </AboutSection>
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default Home;
