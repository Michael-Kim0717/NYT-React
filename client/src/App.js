import React, { Component } from 'react';

/* Stylesheet */
import "./style.css"

/* Components */
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
/* import Saved from "./components/Saved/Saved"; */

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
