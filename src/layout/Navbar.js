import React from 'react'
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

function Navbar({title}) {
  
  return (
    
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active mx-2">
          <a href = "/" className = "nav-link">Home</a>
        </li>
        <li className="nav-item active mx-2">
          <a href = "/add" className = "nav-link">Add User</a>
       </li>
       <li className="nav-item mx-2">
            <a href = "/github" className = "nav-link">Project Files</a>
        </li>
      
      </ul>
    
    </nav>
    
  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title : "Default App"
}
export default Navbar;
