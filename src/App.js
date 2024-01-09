import React, { Component } from 'react'
import User from "./components/User";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    users: [
      {
        id:1,
        name:"Başak",
        salary:"5000",
        department:"Satış"
      },
      {
        id:2,
        name:"Oktay",
        salary:"4000",
        department:"Bilişim"
      },
      {
        id:3,
        name:"Bilgi",
        salary:"6000",
        department:"Üretim"
      },
    ]
  }

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar title = "User App" altTitle = "Another Title" />
        <hr/>

        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      </div>
    )
  }
}

export default App;
