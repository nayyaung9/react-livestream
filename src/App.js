import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
// pages
import StreamList from './pages/streams/StreamList';
import StreamCreate from './pages/streams/StreamCreate';

function App() {
  return (
    <Router history={history}>
      <Route path="/streams" component={StreamList} />
      <Route exact path="/stream/new" component={StreamCreate} />
    </Router>
  );
}

export default App;
