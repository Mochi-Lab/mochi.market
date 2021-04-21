import { useEffect, useState, useRef } from 'react';

import Navbar from 'components/Navbar';
import Introductions from 'components/Introductions';
import Community from 'components/Community';
import TheProblems from 'components/TheProblems';
import WeBringTo from 'components/WeBringTo';
import MainMeal from 'components/MainMeal';
import MomaToken from 'components/MomaToken';
import UtilityFeatures from 'components/UtilityFeatures';
import Roadmap from 'components/Roadmap';
import MochiTeam from 'components/MochiTeam';
import Advisors from 'components/Advisors';
import Partners from 'components/Partners';
import Footer from 'components/Footer';

import { VerticalAlignTopOutlined } from '@ant-design/icons';

import './style.css';

export default function LandingPage() {
  const sections = useRef([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const executeScroll = (strSection) => {
    if (!strSection) return;
    sections.current[strSection].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landing-page'>
      <div ref={(el) => (sections.current['Top'] = el)}>
        <Navbar executeScroll={executeScroll} sections={sections} />
      </div>
      <Introductions />
      <TheProblems />
      <WeBringTo />
      <MainMeal />
      <MomaToken />
      <UtilityFeatures />
      <Community />
      <Roadmap />
      <MochiTeam />
      <Advisors />
      <Partners />
      <Footer />
      <div
        className={`btn-back-top ${showScrollTop ? 'is-visible' : ''}`}
        onClick={() => executeScroll('Top')}
      >
        <div className='btn-back-top-content'>
          <VerticalAlignTopOutlined />
        </div>
      </div>
    </div>
  );
}
