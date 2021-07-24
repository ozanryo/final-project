import React, { Component } from 'react'
import './App.css';
import { NavBar } from "./components/index"
import { BrowserRouter as Router } from "react-router-dom"
import Page from "./page/page"
import {connect} from 'react-redux'

class App extends Component {
  render(){
    return(
      <Router>
          <NavBar />
          <Page />
      </Router>
    )
  }
}

const mapStateToProps=(state)=>({
  getLoginStatus: state.forLogin.status
})

export default connect(mapStateToProps)(App);
