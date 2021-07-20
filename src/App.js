import './App.css';
import SimpleContainer from './maincontainer';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import EngalaPathi from './engalapathi';
import PrivacyPolicy from './privacyPolicy';

function App() {
  return (
    <main style={{ backgroundColor: '#E6E6E6'}}>
      <Switch>
        <Route path="/" component={SimpleContainer} exact />
        <Route path="/about" component={EngalaPathi} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route component={Error} />
      </Switch>
    </main>

  );
}

export default App;
