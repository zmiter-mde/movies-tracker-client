import React, { Component } from 'react';
import {CardMedia, Grid, Typography} from '@material-ui/core';

import styles from './Profile.module.scss';

class Profile extends Component {
    render() {
        const { currentUser: { imageUrl, name, email }} = this.props;
        let username = name && name[0];
        return <Grid container justify="center" direction="column" alignItems="center">
            <CardMedia className={styles.avatar} image={imageUrl} title={username} />
            <Typography variant="body1" color="primary">Welcome, {name}!</Typography>
            <Typography variant="body2" color="primary">{email}</Typography>
        </Grid>;
    }
}

export default Profile