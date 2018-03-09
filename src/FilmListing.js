import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(filter) {
        console.log('Setting filter to ' + filter);
        this.setState({
            filter: filter
        })
    }

    render() {
        const { faves, films } = this.props;
        const allActive = (this.state.filter === 'all') ? 'is-active' : '';
        const favesActive = (this.state.filter === 'faves') ? 'is-active' : '';
        let allFilms = [];

        if (this.state.filter === 'all') {
            allFilms = films.map((film, index) => {
                return (
                    <FilmRow onFaveToggle={ () => this.props.onFaveToggle(film) }
                        onDetailsClick={ () => this.props.onDetailsClick(film) }
                        film={film} 
                        key={film.id}
                        isFave={ faves.includes(film) } />
                )
            })
        } else {
            allFilms = faves.map((film, index) => {
                return (
                    <FilmRow onFaveToggle={ () => this.props.onFaveToggle(film) }
                        onDetailsClick={ () => this.props.onDetailsClick(film) }
                        film={film} 
                        key={film.id}
                        isFave={ faves.includes(film) } />
                )
            })
        } 

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={"film-list-filter " + allActive} onClick={ (e) => this.handleFilterClick('all') }>
                        ALL
                        <span className="section-count">{films.length}</span>
                    </div>
                    <div className={"film-list-filter " + favesActive} onClick={ (e) => this.handleFilterClick('faves') }>
                        FAVES
                        <span className="section-count">{faves.length}</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing;
