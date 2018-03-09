import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from'./FilmDetails';
import TMDB from './TMDB.js';

const films = TMDB.films

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films,
            faves: [],
            current: {}
        }
        this.handleFaveToggle = this.handleFaveToggle.bind(this);
    }

    handleFaveToggle(film) {
        const faves = Array.from(this.state.faves);
        const filmIndex = faves.indexOf(film);
        if (filmIndex !== -1) {
            // The film is already faved, so remove it
            faves.splice(filmIndex, 1);
            console.log("Removing a favorite", film.title)
        } else {
            // The film needs to be added
            faves.push(film);
            console.log("Adding a favorite", film.title)
        }
        this.setState({ faves });
    }

    handleDetailsClick = (film) => {
        console.log('Fetching details for ' + film.title);
        this.setState({
            current: film
        })
    }

    render() {
        return (
         <div className='film-library'>
           <FilmListing faves={this.state.faves} onDetailsClick={this.handleDetailsClick} onFaveToggle={this.handleFaveToggle} films={this.state.films}  />
           <FilmDetails film={this.state.current} />
         </div>
        );
    }
}

export default App;
