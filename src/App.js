import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import PrivacyPolicyAndTermsConditions from './views/PrivacyPolicyAndTermsConditions';
import FAQ from './views/FAQ';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/faq' element={<FAQ />} />
          {/* <Route path='/papers' element={<Papers />} /> */}
          <Route
            path='/privacy-policy-and-terms-conditions'
            element={<PrivacyPolicyAndTermsConditions />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
