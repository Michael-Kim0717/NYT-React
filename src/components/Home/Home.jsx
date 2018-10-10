import React, { Component } from 'react';

/* Stylesheet */
import "./Home.css";

class Home extends Component {
    state = { 

    };

    render() { 
        return (
            <div className="row">
                <div className="col s12 m3 offset-m1 box" id="search">
                    <div className="header">
                        <h4 className="center"> Find an Article that Interests You! </h4>
                    </div>
                    <div id="inputs">
                        <div className="input-field inline col s12">
                            <input type="text" id="topicInput"/>
                            <label for="topicInput"> Topic </label>
                        </div>
                        <div className="input-field inline col s12">
                            <input type="text" id="startYearInput"/>
                            <label for="startYearInput"> Start Year Input </label>
                        </div>
                        <div className="input-field inline col s12">
                            <input type="text" id="endYearInput"/>
                            <label for="endYearInput"> End Year Input </label>
                        </div>
                        <button className="btn" id="searchButton"> Search </button>
                    </div>
                </div>
                <div className="col s12 m6 offset-m1 box" id="results">
                    <div className="header">
                        <h4 className="center"> Your Results : </h4>
                    </div>
                </div>
                
                <div className="col s10 offset-s1 box">
                    <div className="header">
                        <h4 className="center"> Saved Articles : </h4>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;