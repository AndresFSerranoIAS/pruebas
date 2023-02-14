import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import { Footer } from './app/ui/components/footer';
import { Navbar } from './app/ui/components/navbar';
import { Employee } from './app/ui/pages/employee';
import { Home } from './app/ui/pages/home';
import { NotFound } from './app/ui/pages/NotFound';
import { Settlement } from './app/ui/pages/settlement';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employee">Employee</Link>
            </li>
            <li>
              <Link to="/settlement">Settlement</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/settlement">
              <Settlement />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;