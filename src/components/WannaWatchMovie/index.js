import React from 'react';
import {Card, Button, CardContent, CardMedia, Link, Grid, Typography} from "@material-ui/core";
import classnames from "classnames";
import {addToWatchList, removeFromWatchList} from '../../actions/moviesActions';

import styles from './WannaWatchMovie.module.scss';

class WannaWatchMovie extends React.Component {

    addToWatchList(movieId) {
        addToWatchList(movieId);
    }

    removeFromWatchList(movieId) {
        removeFromWatchList(movieId);
    }

    render() {
        const {movie} = this.props;
        return <Grid item className={styles.movieCardGridItem}>
            <Card className={classnames({[styles.movieCardWrapper]: true, [styles.released]: movie.released})}>
                <div className={styles.movieCard}>
                    <CardMedia
                        component="img"
                        alt="Movie image unavailable"
                        className={styles.movieImage}
                        src={movie.imageUrl}
                    />
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">{movie.titleEn}</Typography>
                        <Typography variant="subtitle1" color="primary">{movie.titleRu}</Typography>
                        <Typography variant="subtitle1" color="primary">{movie.releaseDate}</Typography>
                        <Typography variant="button" className={styles.movieBaseLink}><Link target="_blank" href={movie.imdbLink} color="secondary">Imdb</Link></Typography>
                        <Typography variant="button" className={styles.movieBaseLink}><Link target="_blank" href={movie.kinopoiskLink} color="secondary">Kinopoisk</Link></Typography>
                        { movie.wannaWatch ?
                            <Button onClick={() => this.removeFromWatchList(movie.id)} className={styles.wannaWatchButton}>
                                <Typography color="primary" variant="body1">Remove</Typography>
                            </Button> :
                            <Button onClick={() => this.addToWatchList(movie.id)} className={styles.wannaWatchButton}>
                                <Typography color="primary" variant="body1">Wanna watch</Typography>
                            </Button> }
                    </CardContent>
                </div>
            </Card>
        </Grid>;
    }
}

export default WannaWatchMovie;