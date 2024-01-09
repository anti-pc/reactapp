import React, { Component } from 'react'
import User from "./components/User";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

class App extends Component {


  render() {
    return (
      <div className="container">
        <Navbar title = "User App" altTitle = "Another Title" />
        <hr/>

        <Users />
      </div>
    )
  }
}

export default App;
