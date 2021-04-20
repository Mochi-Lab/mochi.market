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
import Footer from 'components/Footer';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar />
      <Introductions />
      <Community />
      <TheProblems />
      <WeBringTo />
      <MainMeal />
      <MomaToken />
      <UtilityFeatures />
      <Roadmap />
      <MochiTeam />
      <Footer />
    </div>
  );
}
