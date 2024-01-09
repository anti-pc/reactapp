import React, { Component } from 'react'
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

class App extends Component {


  render() {
    return (
      <div className="container">
        <Navbar title = "User App" altTitle = "Another Title" />
        <hr/>

        <AddUser />
        <Users />
      </div>
    )
  }
}

export default App;
