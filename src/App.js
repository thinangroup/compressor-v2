import MainPage from './mainpage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import Jigsaw1 from './pages/jigsaw1';
import Jigsaw2 from './pages/jigsaw2';
import Maze from './blog/maze';
import Questions from './blog/Questions';
import './App.css';

function App() {
  return (
    <main style={{ background: '#FFFFF0', color: '#353839'}}>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/jigsaw1" component={Jigsaw1} />
        <Route path="/jigsaw2" component={Jigsaw2} />
        <Route path="/maze" component={Maze} />
        <Route path="/different-types-of-image-formats" component={Questions} />
        <Route component={Error} />
      </Switch>
    </main>

  );
}

export default App;
