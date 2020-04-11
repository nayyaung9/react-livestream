import React from 'react';
import { Router, Route } from 'react-router-dom';

// pages
import StreamList from './pages/streams/StreamList';

function App() {
  return (
    <Router>
      <Route path="/streams" component={StreamList} />
    </Router>
  );
}

export default App;
