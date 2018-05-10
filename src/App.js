import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import What from './components/What/what';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <What />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Footer />
      </div>
    );
  }
}

export default App;
