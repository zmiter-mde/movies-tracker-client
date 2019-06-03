import React from 'react';
import {connect} from 'react-redux';

import MoviesList from '../common/MoviesList';

import {DEFAULT_PAGE_SIZE, loadMovies} from '../../actions/moviesActions';

class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    fetchMoreData() {
        const {movies, allMoviesLoaded, isLoading, searchString} = this.props;
        if (!allMoviesLoaded && !isLoading) {
            loadMovies(Object.keys(movies).length / DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE, "Search", searchString);
        }
    }

    render() {
        const {movies, allMoviesLoaded} = this.props;
        return <MoviesList
            movies={movies}
            allMoviesLoaded={allMoviesLoaded}
            fetchMoreData={this.fetchMoreData}/>;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movieSearch.movies,
        allMoviesLoaded: state.movies.movieSearch.allMoviesLoaded,
        isLoading: state.movies.movieSearch.isLoading,
        searchString: state.movies.movieSearch.searchString
    };
}

export default connect(mapStateToProps)(SearchList);