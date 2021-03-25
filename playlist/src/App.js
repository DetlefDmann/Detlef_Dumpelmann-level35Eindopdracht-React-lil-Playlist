import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { SongOverview } from './components/SongOverview' ;
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <NavBar />
          <Switch>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/" >
              <SongOverview />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
