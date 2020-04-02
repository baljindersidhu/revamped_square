import React from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';

import Sidenav from './components/sidenav/Sidenav';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Sidenav />
        <Navbar />
        <HomePage />
      </div>
    );
  }
}