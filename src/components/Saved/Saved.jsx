import React, {Component} from 'react';

class Saved extends Component {

    deleteFromFavorites = () => {
        this.props.delFavorite(this.props);
    }

    render() { 
        return (
            <div className="row">
                <div className="col s12" id="result">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer"> {this.props.title} </a>
                    <br />
                    <h6> {this.props.pub_date} <button className="btn btn-danger delete" onClick={this.deleteFromFavorites}> Delete </button> </h6>
                    <h6> {this.props.summary} </h6>
                    <h6> {this.props.writer} </h6> 
                </div>
            </div>
        );
    }
}
 
export default Saved;