import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="search">
            <div className="inputs">
                <input id="search" onChange={e => this.props.searchMovie(e.target.value)} className="input" type="text" placeholder="type movie name to search" /> <i class="fa fa-search"></i></div>
            <div className="text"><p className="txt">Minimum rating  </p>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>


        </div>);
    }
}

export default Search;

