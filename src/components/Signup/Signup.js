import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {Button, Grid, Typography} from '@material-ui/core';

import GoogleAuth from '../common/auth/GoogleAuth/GoogleAuth';
import AuthFormContainer from '../common/auth/AuthFormContainer/AuthFormContainer';
import SignupForm from './SignupForm/SignupForm';

class Signup extends Component {
    render() {
        if (this.props.authenticated) {
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return <AuthFormContainer>
            <GoogleAuth text="Sign up with Google"/>
            <Typography variant="body1" color="primary" align="center">or</Typography>
            <SignupForm {...this.props}/>
            <Grid container justify="center" direction="row" alignItems="center">
                <Typography variant="body1" color="primary">Already have an account?</Typography>
                <Link to="/login"><Button><Typography variant="body1" color="primary">Log In</Typography></Button></Link>
            </Grid>
        </AuthFormContainer>;
    }
}

export default Signup