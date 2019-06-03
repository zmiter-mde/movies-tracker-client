import React from 'react';
import {Grid} from '@material-ui/core';
import InfiniteScroll from "react-infinite-scroll-component";

import WannaWatchMovie from '../../WannaWatchMovie';

import styles from './MoviesList.module.scss';

const MoviesList = (props) => {
    const { movies, allMoviesLoaded, fetchMoreData } = props;
    return <div className={styles.wannaWatchListBody}>
        <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={!allMoviesLoaded}
            loader={<h4 className={styles.loading}>Loading...</h4>}
            endMessage={<h4 className={styles.endMessage}>Yay! You have seen it all</h4>}
            style={{overflow: "hidden"}}>
            <Grid container spacing={1} justify="flex-start" className={styles.grid}>
                {Object
                    .values(movies)
                    .sort((a, b) => a.releaseDate < b.releaseDate ? -1 : 1)
                    .map(movie => <WannaWatchMovie movie={movie} key={movie.id}/>)}
            </Grid>
        </InfiniteScroll>
    </div>;
};

export default MoviesList;