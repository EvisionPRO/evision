import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <p className="App-intro">
          To get started, hees edit <code>src/App.js</code> and save to reload.
        </p>

        <Footer />
      </div>
    );
  }
}

export default App;