import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from '@material-ui/core/Link';
import {Grid, Typography} from '@material-ui/core';
import classnames from "classnames";

import styles from './WannaWatchMovie.module.scss';

class WannaWatchMovie extends React.Component {

    render() {
        const {movie} = this.props;
        return <Grid item className={styles.movieCardGridItem}>
            <Card className={classnames({[styles.movieCardWrapper]: true, [styles.released]: movie.released})}>
                <CardActionArea className={styles.movieCard}>
                    <CardMedia
                        component="img"
                        alt="Movie image unavailable"
                        className={styles.movieImage}
                        src={movie.imageUrl}
                    />
                    <CardContent>
                        <Typography variant="subtitle1" color="primary">{movie.titleEn}</Typography>
                        <Typography variant="subtitle2" color="primary">{movie.titleRu}</Typography>
                        <Typography variant="button" className={styles.movieBaseLink}><Link target="_blank" href={movie.imdbLink} color="secondary">Imdb</Link></Typography>
                        <Typography variant="button" className={styles.movieBaseLink}><Link target="_blank" href={movie.kinopoiskLink} color="secondary">Kinopoisk</Link></Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>;
    }
}

export default WannaWatchMovie;