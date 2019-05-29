import {CardMedia, Grid, Link, Typography} from '@material-ui/core';
import {GOOGLE_AUTH_URL} from '../../../../constants';
import googleLogo from '../../../../images/google-logo.png';
import React from 'react';

import styles from './GoogleAuth.module.scss';

const GoogleAuth = (props) =>
    <Grid container justify="center" direction="row" alignItems="center">
        <Link href={GOOGLE_AUTH_URL}>
            <Grid container justify="flex-start" direction="row" alignItems="center">
                <CardMedia className={styles.googleLogo} image={googleLogo} title="Google"/>
                <Typography variant="body1" color="inherit">{props.text}</Typography>
            </Grid>
        </Link>
    </Grid>;

export default GoogleAuth;