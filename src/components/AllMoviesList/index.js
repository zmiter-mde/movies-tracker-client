import React from 'react';
import {connect} from 'react-redux';

import {DEFAULT_PAGE_SIZE, loadMovies} from '../../actions/moviesActions';
import MoviesList from '../common/MoviesList';

class AllMoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        const {movies, allMoviesLoaded, isLoading} = this.props;
        if (!allMoviesLoaded && !isLoading) {
            loadMovies(Object.keys(movies).length / DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE, "All");
        }
    }

    render() {
        const {movies, allMoviesLoaded} = this.props;
        return <MoviesList movies={movies} allMoviesLoaded={allMoviesLoaded} fetchMoreData={this.fetchMoreData}/>;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.allMovies.movies,
        allMoviesLoaded: state.movies.allMovies.allMoviesLoaded,
        isLoading: state.movies.allMovies.isLoading
    };
}

export default connect(mapStateToProps)(AllMoviesList);