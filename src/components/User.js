import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class User extends Component {
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
  }

  render() {
    
    //Destructing
    // <li>İsim : {this.props.name} </li>  --> <li>İsim : {name} </li>
    const {name,department,salary} = this.props;

    return (
      <div>
        <ul>
            <li><i class="fa-regular fa-face-smile"></i> İsim : {name} </li> 
            <li><i class="fa-solid fa-building"></i> Departman : {department} </li>
            <li><i class="fa-solid fa-hand-holding-dollar"></i>Maaş : {salary} </li>

        </ul>
      </div>
    )
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;