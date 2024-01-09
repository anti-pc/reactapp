import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class User extends Component {
  state = {
    isVisible : false
  }
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
  }


  onClickEvent = (e) => {
    
    //console.log(e.target)
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = (e) => {
    const{id,deleteUser} = this.props;
    deleteUser(id);
  }

  render() {
    
    //Destructing
    // <li>İsim : {this.props.name} </li>  --> <li>İsim : {name} </li>
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
            <i onClick={this.onDeleteUser} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
          </div>

          {
            isVisible ? 
            <div className='card-body'>
              <p className='card-text'><i className="fa-solid fa-building"></i> Departman : {department}</p>
              <p className='card-text'><i className="fa-solid fa-hand-holding-dollar"></i> Maaş : {salary}</p>
            </div> : null
          }
        </div>
      </div>
    )
  }
}




User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  deleteUser : PropTypes.func.isRequired
}

export default User;