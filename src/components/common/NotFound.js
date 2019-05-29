import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Typography, Button} from '@material-ui/core';

class NotFound extends Component {
    render() {
        return <Grid container justify="center" direction="column" alignItems="center">
            <Typography variant="h4" color="primary">The Page you're looking for was not found</Typography>
            <Link to="/"><Button variant="contained">Go To Log In</Button></Link>
        </Grid>;
    }
}

export default NotFound;