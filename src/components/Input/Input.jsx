import React, { Component } from 'react';

class Input extends Component {
    state = { 

    }

    render() { 
        return (  
            <div className="input-field inline col s12" id={this.props.id}>
                <input type="text" id={this.props.inputID} required/>
                <label htmlFor={this.props.inputID}> {this.props.inputName} </label>
            </div>
        );
    }
}
 
export default Input;