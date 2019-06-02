import React from 'react';
import {connect} from 'react-redux';

import MoviesList from '../common/MoviesList';

import {DEFAULT_PAGE_SIZE, loadAllMovies} from '../../actions/moviesActions';

class SearchList extends React.Component {

    fetchMoreData() {
        const {movies, allMoviesLoaded, isLoading, searchString} = this.props;
        if (!allMoviesLoaded && !isLoading) {
            loadAllMovies(movies.length / DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE, "Search", searchString);
        }
    }

    render() {
        const {movies, allMoviesLoaded} = this.props;
        return <MoviesList
            movies={movies}
            allMoviesLoaded={allMoviesLoaded}
            fetchMoreData={this.fetchMoreData.bind(this)}/>;
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