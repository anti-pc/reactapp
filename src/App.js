import React, { Component } from 'react'
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Test from "./components/Test";

class App extends Component {


  render() {
    return (
      <div className="container">
        <Test test="deneme"/>
        <Navbar title = "User App" altTitle = "Another Title" />
        <hr/>

        <AddUser />
        <Users />
      </div>
    )
  }
}

export default App;
