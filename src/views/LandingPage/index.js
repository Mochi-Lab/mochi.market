import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
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
  let history = useHistory();
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

  useEffect(() => {
    if (!!history.location.hash) {
      executeScroll(history.location.hash.slice(1));
    }
  });

  const executeScroll = (strSection) => {
    if (!strSection || !sections.current[strSection]) return;
    sections.current[strSection].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landing-page'>
      <div ref={(el) => (sections.current['Top'] = el)}>
        <Navbar executeScroll={executeScroll} sections={sections} />
      </div>
      <div ref={(el) => (sections.current['Product'] = el)}>
        <Introductions />
      </div>
      <TheProblems />
      <WeBringTo />
      <MainMeal />
      <div ref={(el) => (sections.current['Tokenomics'] = el)}>
        <MomaToken />
      </div>
      <UtilityFeatures />
      <Community />
      <div ref={(el) => (sections.current['Roadmap'] = el)}>
        <Roadmap />
      </div>
      {/* <div ref={(el) => (sections.current['Team'] = el)}>
        <MochiTeam />
      </div> */}
      {/* <Advisors /> */}
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
