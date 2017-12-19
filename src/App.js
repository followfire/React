import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import OstBox from "./components/common-head/common-head";
import Main from './components/main/main';
class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <OstBox/>
        </header>
        <section className='container'>
          <Main/>
        </section>
      </div>
    );
  }
}

export default App;
