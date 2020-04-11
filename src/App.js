import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
// pages
import StreamList from './pages/streams/StreamList';
import StreamCreate from './pages/streams/StreamCreate';
import StreameEdit from './pages/streams/StreamEdit';
import StreamWatch from './pages/streams/StreamWatch';

function App() {
  return (
    <Router history={history}>
      <Route path="/streams" component={StreamList} />
      <Route exact path="/stream/new" component={StreamCreate} />
      <Route path="/stream/edit/:id" component={StreameEdit} />
      <Route path="/stream/watch/:id" component={StreamWatch} />
    </Router>
  );
}

export default App;
