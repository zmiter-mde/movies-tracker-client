import React, {Component} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';

import {login} from '../../../actions/authActions';
import {ACCESS_TOKEN} from '../../../constants';

import Alert from 'react-s-alert';

import styles from './LoginForm.module.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.formInputsWrapper}>
                    <Grid container justify="space-between" direction="column">
                        <TextField
                            className={styles.textInput}
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            required
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            className={styles.textInput}
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            required
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            autoComplete="current-password"
                            onChange={this.handleInputChange}
                        />
                        <Button fullWidth type="submit" variant="contained" className={styles.submitButton}>Login</Button>
                    </Grid>
                </div>
            </form>
        );
    }
}

export default LoginForm;