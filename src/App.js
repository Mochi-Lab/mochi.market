import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import PrivacyPolicyAndTermsConditions from './views/PrivacyPolicyAndTermsConditions';
import FAQ from './views/FAQ';
import Papers from './views/Papers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/faq' component={FAQ} />
          {/* <Route exact path='/papers' component={Papers} /> */}
          <Route
            exact
            path='/privacy-policy-and-terms-conditions'
            component={PrivacyPolicyAndTermsConditions}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
