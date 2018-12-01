import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import MovieList from './Component/MovieList';

import Add from './Component/Add'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [
        { name: "blade", rating: "***********" },
        { name: "3omar wa salma", rating: "******" },
        { name: "Inception", rating: "*" },
        { name: "blood", rating: "****" }
      ],
      search: "",
      modal: false,
      name: "",
      rating: ""


    };
  }
  searched = value => {
    this.setState({
      search: value
    });
  };
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  hundleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addMovie = () => {
    let { name, rating } = this.state;
    this.setState({
      movieList: [...this.state.movieList, { name, rating }]
    });
    this.toggleModal();
  };

  render(props) {
    return (
      <div className="App">


        <Search searchMovie={this.searched} />
        {/* hya l props */}
        <br />
        <Add
          show={this.state.modal}
          hundleChange={this.hundleChange}
          addNew={this.addMovie}
        />
        < MovieList moviesList={this.state.movieList.filter(x =>
          x.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1
        )}
        />
        <button onClick={this.toggleModal}> add new movie</button>


      </div>
    );
  }
}

export default App;
