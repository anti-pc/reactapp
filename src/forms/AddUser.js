import React, { Component } from 'react';
import pose from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';


//var uniqid = require('uniqid');
const Animation = pose.div({
    visible : { 
        opacity : 1,
        applyAtStart : {
            display: "block"
        } 
    }, 
    hidden :  { 
        opacity : 0, 
        applyAtEnd : {
            display: "none"
        } 
    }    
});


class AddUser extends Component {

    state = {
        visible: false,
        name:"",
        department:"",
        salary:""
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addUser = async (dispatch,e) => {
        e.preventDefault(); 
        //console.log("Test");
        const {name,department,salary} = this.state;

        const newUser = {
            //id:uniqid(),
            name,
            department,
            salary
            // name:name,
            // salary:salary,
            // department:department
        }
        const response = await axios.post("http://localhost:3004/users", newUser);

        dispatch({type:"ADD_USER",payload:response.data});

        //console.log(newUser);
        // Redirect
        //this.props.history.push("/");
        window.location.href = "/";
    }

  render() {
    const {visible,name,department,salary} = this.state;

    return <UserConsumer>   
    {
        value => {

            const {dispatch} = value;

            return (
                <div className='container'>
                    <div className='col-md-8 mb-4'>
            
                        <button onClick={this.changeVisibility} className='btn btn-dark w-100 mb-2'>{visible ? "Hide Form" : "Show Form"}</button>
                        
                        <Animation pose = {visible ? "visible" : "hidden"}>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Add User From</h4>
                                    <hr/>
                                </div>    
            
                                <div className='card-body'>
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className='form-group'>
                                            <label htmlFor="name">Name</label>
                                            <input
                                            type="text"
                                            name="name"
                                            id="id"
                                            placeholder="Enter Name"
                                            className='form-control'
                                            value={name}
                                            onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="department">Department</label>
                                            <input
                                            type="text"
                                            name="department"
                                            id="department"
                                            placeholder="Enter Department"
                                            className='form-control'
                                            value={department}
                                            onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="salary">Salary</label>
                                            <input
                                            type="text"
                                            name="salary"
                                            id="salary"
                                            placeholder="Enter Salary"
                                            className='form-control'
                                            value={salary}
                                            onChange={this.changeInput}
                                            />
                                        </div> 
                                        <br/>   
                                        <button className='btn btn-danger w-100' type="submit">Add User</button>  
            
                                    </form>
            
                                </div>
            
                            </div>
                        </Animation>
                        
                    </div>
            
                </div>
                )           
        }
    }
    </UserConsumer>


  }
}

export default AddUser;