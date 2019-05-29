import React, { Component } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

import Alert from 'react-s-alert';

import LoginForm from './LoginForm/LoginForm';
import GoogleAuth from '../common/auth/GoogleAuth/GoogleAuth';
import AuthFormContainer from '../common/auth/AuthFormContainer/AuthFormContainer';

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if (this.props.authenticated) {
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return <AuthFormContainer>
            <GoogleAuth text="Log in with Google"/>
            <Typography variant="body1" color="primary" align="center">or</Typography>
            <LoginForm {...this.props}/>
            <Grid container justify="center" direction="row" alignItems="center">
                <Typography variant="body1" color="primary">Don't have an account?</Typography>
                <Link to="/signup"><Button><Typography variant="body1" color="primary">Sign Up</Typography></Button></Link>
            </Grid>
        </AuthFormContainer>;
    }
}

export default Login;
