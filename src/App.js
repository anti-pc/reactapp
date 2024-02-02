import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
import Users from "./components/Users";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
//import Test from "./components/Test";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends Component {
//   <div className="container">
//   <Test test="deneme"/>
//   <Navbar title = "User App" altTitle = "Another Title" />
//   <hr/>

//   <AddUser />
//   <Users />
// </div>

// <Routes>
// <Route  path = "/" component = {<Users/>} />
// <Route  path = "/add" component = {<AddUser/>} />
// <Route  path = "/github" component = {<Contribute/>} />
// <Route  path = "/edit/:id" component = {<UpdateUser/>} />
// <Route component = {<NotFound/>} />
// </Routes>

  render() {
    return (
      
      <Router>
        <div className="container">
         <Navbar title = "User App"/>
          <hr/>
          
          <Switch>
            <Route exact path = "/" component = {Users} />
            <Route exact path = "/add" component = {AddUser} />
            <Route exact path = "/github" component = {Contribute} />
            <Route exact path = "/edit/:id" component = {UpdateUser} />
            <Route component = {NotFound} />
          </Switch>
          
          
         
          
          
          

        </div>
      </Router>
    )
  }
}

export default App;
