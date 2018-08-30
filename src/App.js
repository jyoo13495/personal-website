import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jun Yoo's Website</h1>
          <nav className="Navigation-bar">
            <Link className="Navigation-button" to='/' >Home</Link>
            <Link className="Navigation-button" to='/About'>About</Link>
            <Link className="Navigation-button" to='/Projects'>Projects</Link>
            <Link className="Navigation-button" to='/Blog'>Blog</Link>
          </nav>
        </header>
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Blog' component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
