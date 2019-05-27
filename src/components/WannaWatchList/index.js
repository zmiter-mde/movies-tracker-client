import React from 'react';
import {connect} from 'react-redux';
import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

import WannaWatchMovie from '../WannaWatchMovie';
import {DEFAULT_PAGE_SIZE, loadMovies} from '../../actions';

import styles from './WannaWatchList.module.scss';

class WannaWatchList extends React.Component {

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        const {movies, allMoviesLoaded} = this.props;
        if (!allMoviesLoaded) {
            loadMovies(movies.length / DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE);
        }
    };

    render() {
        const {movies, allMoviesLoaded} = this.props;
        return <InfiniteScroll
            dataLength={movies.length}
            next={this.fetchMoreData.bind(this)}
            hasMore={!allMoviesLoaded}
            loader={<h4 className={styles.loading}>Loading...</h4>}
            endMessage={<h4 className={styles.endMessage}>Yay! You have seen it all</h4>}
            style={{overflow: "hidden"}}>
            <Grid container spacing={1} justify="flex-start" className={styles.grid}>
                {movies.map(movie => <WannaWatchMovie movie={movie} key={movie.id}/>)}
            </Grid>
        </InfiniteScroll>;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movies,
        allMoviesLoaded: state.movies.allMoviesLoaded
    };
}

export default connect(mapStateToProps)(WannaWatchList);