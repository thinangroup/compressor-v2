import SimpleContainer from './maincontainer';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import EngalaPathi from './pages/engalapathi';
import PrivacyPolicy from './pages/privacyPolicy';
import Terms from './pages/termsandConditions';
import Blogs from './pages/blogs';
import Kadhai from './blog/kathai';
import KadhaiKulKathai from './blog/KathaikulKathi';
import './App.css';

function App() {
  return (
    <main style={{ background: '#FFFFF0', color: '#353839'}}>
      <Switch>
        <Route path="/" component={SimpleContainer} exact />
        <Route path="/about" component={EngalaPathi} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/why-do-we-compress-images" component={Kadhai} />
        <Route path="/different-types-of-image-formats" component={KadhaiKulKathai} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={Terms} />
        <Route component={Error} />
      </Switch>
    </main>

  );
}

export default App;
