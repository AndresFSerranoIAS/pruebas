import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './app/ui/components/footer';
import { MainComponent } from './app/ui/components/MainComponent';
import { Navbar } from './app/ui/components/navbar';

function App() {

  return (
    <React.Fragment>
      <Router>
      <Navbar />
      <MainComponent/>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;