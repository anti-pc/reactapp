import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class User extends Component {
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
  }

  constructor(props) {
    super(props);

    this.state = {
      test : "Test"
    }
  }

  render() {
    
    //Destructing
    // <li>İsim : {this.props.name} </li>  --> <li>İsim : {name} </li>
    const {name,department,salary} = this.props;

    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline'>{name}</h4>
            <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
          </div>

          <div className='card-body'>
            <p className='card-text'><i class="fa-solid fa-building"></i> Departman : {department}</p>
            <p className='card-text'><i class="fa-solid fa-hand-holding-dollar"></i> Maaş : {salary}</p>            
            <p>{this.state.test}</p>
          </div>
        </div>
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