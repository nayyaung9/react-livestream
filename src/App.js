import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
// pages
import StreamList from './pages/streams/StreamList';

function App() {
  return (
    <Router history={history}>
      <Route path="/streams" component={StreamList} />
    </Router>
  );
}

export default App;
