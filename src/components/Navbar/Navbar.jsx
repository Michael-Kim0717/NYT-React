import React, { Component } from 'react';

/* Stylesheet */
import "./Navbar.css"

class Navbar extends Component {
    state = { 

    };

    render() { 
        return (
            <div className="container-fluid">
                <h5 className="center"> Search through 
                    <br/>
                    <img src="./images/NYTLogo.png" alt="The New York Times" id="NYTLogo"/> 
                </h5>
            </div>
        );
    }
}
 
export default Navbar;