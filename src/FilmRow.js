import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    render () {
        let film = this.props.film
        let year = new Date(film.release_date).getFullYear()
        return (
            <div className='film-row' onClick={ () => this.props.onDetailsClick(film.title) } >
                <FilmPoster url={film.poster_path} />
                <div className='film-summary'>
                    <h1>{film.title}</h1>
                    <p>{year}</p>
                </div>
                <Fave isFave={this.props.isFave} onFaveToggle={ this.props.onFaveToggle } />
            </div>
        )
    }
}

export default FilmRow;