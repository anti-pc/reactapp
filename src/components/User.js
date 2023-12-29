import React, { Component } from 'react'

 class User extends Component {
  render() {
    
    //Destructing
    // <li>İsim : {this.props.name} </li>  --> <li>İsim : {name} </li>
    const {name,department,salary} = this.props;

    return (
      <div>
        <ul>
            <li>İsim : {name} </li> 
            <li>Departman : {department} </li>
            <li>Maaş : {salary} </li>

        </ul>
      </div>
    )
  }
}

export default User;