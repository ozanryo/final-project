import React, { Component } from 'react'
import './App.css';
import { NavBar } from "./components/index"
import { BrowserRouter as Router } from "react-router-dom"
import Page from "./page/page"

class App extends Component {
  render(){
    return(
      <Router>
          <NavBar />
          <Page />
          {/* <NavBar /> */}
      </Router>
    )
  }
}

export default App;
