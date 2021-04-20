import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
