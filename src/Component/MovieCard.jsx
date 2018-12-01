import React, { Component } from 'react';
class MovieCard extends Component {
    render() {
        return (
            <div className="movie">
                <h5>{this.props.rate}</h5>

                <h3>{this.props.name}</h3>
            </div>
        );
    }
}
export default MovieCard;
