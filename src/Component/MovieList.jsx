import React, { Component } from 'react';
import MovieCard from "./MovieCard";
class MovieList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="movie-list">
                {this.props.moviesList.map(x => (
                    <MovieCard name={x.name} rate={x.rating} />
                ))}
            </div>

        );
    }
}

export default MovieList;