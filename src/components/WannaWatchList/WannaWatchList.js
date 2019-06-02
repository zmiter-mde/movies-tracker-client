import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CardMedia, Grid, Typography} from '@material-ui/core';

import styles from './WannaWatchList.module.scss';
import MoviesList from '../common/MoviesList';
import {DEFAULT_PAGE_SIZE, loadAllMovies} from '../../actions/moviesActions';

class WannaWatchList extends Component {

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        const {movies, allMoviesLoaded, isLoading} = this.props;
        if (!allMoviesLoaded && !isLoading) {
            loadAllMovies(movies.length / DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE, "MyWatchList");
        }
    }

    render() {
        const { currentUser: { imageUrl, name, email }, movies, allMoviesLoaded} = this.props;
        let username = name && name[0];
        return <Grid container justify="center" direction="column" alignItems="center">
            <CardMedia className={styles.avatar} image={imageUrl} title={username} />
            <Typography variant="body1" color="primary">Welcome, {name}!</Typography>
            <Typography variant="body2" color="primary">{email}</Typography>
            <MoviesList movies={movies} allMoviesLoaded={allMoviesLoaded} fetchMoreData={this.fetchMoreData.bind(this)}/>
        </Grid>;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.myWatchList.movies,
        allMoviesLoaded: state.movies.myWatchList.allMoviesLoaded,
        isLoading: state.movies.myWatchList.isLoading
    };
}

export default connect(mapStateToProps)(WannaWatchList);