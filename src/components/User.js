import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'


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

  onDeleteUser = (dispatch,e) => {
    const{id} = this.props;
    // Consumer dispatch

    dispatch({type: "DELETE_USER", payload:id});
  }

  render() {
    

    const {name,department,salary} = this.props;
    const {isVisible} = this.state;

    return (
      <UserConsumer>
      {
        value => {
          const {dispatch} = value;

          return (
            <div className='col-md-8 mb-4'>
              <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                  <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
                  <i onClick={this.onDeleteUser.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
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
      </UserConsumer>
    )

    // return (
    //   <div className='col-md-8 mb-4'>
    //     <div className='card'>
    //       <div className='card-header d-flex justify-content-between'>
    //         <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
    //         <i onClick={this.onDeleteUser} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
    //       </div>

    //       {
    //         isVisible ? 
    //         <div className='card-body'>
    //           <p className='card-text'><i className="fa-solid fa-building"></i> Departman : {department}</p>
    //           <p className='card-text'><i className="fa-solid fa-hand-holding-dollar"></i> Maaş : {salary}</p>
    //         </div> : null
    //       }
    //     </div>
    //   </div>
    // )

  }
}


User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;