import React, {Component} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import Alert from 'react-s-alert';

import {signup} from '../../../actions/authActions';

import styles from '../../Login/LoginForm/LoginForm.module.scss';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
            .then(response => {
                Alert.success("You're successfully registered. Please login to continue!");
                this.props.history.push("/login");
            })
            .catch(error => {
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
                            margin="dense"
                            required
                            id="name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            className={styles.textInput}
                            margin="dense"
                            required
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            className={styles.textInput}
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
                        <Button fullWidth type="submit" variant="contained">Sign Up</Button>
                    </Grid>
                </div>
            </form>

        );
    }
}

export default SignupForm;