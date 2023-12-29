import React from 'react';

function Navbar(props) {
    return (
        <div>
            <h3>{props.title} - {props.altTitle}</h3>
        </div>
    )
}


export default Navbar;