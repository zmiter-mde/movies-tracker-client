import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import WannaWatchList from './WannaWatchList/WannaWatchList';
import AllMoviesList from './AllMoviesList';
import SearchList from './SearchList';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import AppHeader from './AppHeader/AppHeader';
import OAuth2RedirectHandler from './common/auth/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser } from '../actions/authActions';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from './common/auth/PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        };

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        let { loading, authenticated, currentUser } = this.state;

        if (loading) {
            return <LoadingIndicator />
        }

        return (
            <div>
                <AppHeader authenticated={authenticated} onLogout={this.handleLogout}/>
                <Switch>
                    <PrivateRoute exact path="/" authenticated={authenticated} currentUser={currentUser} component={AllMoviesList}/>
                    <PrivateRoute path="/wanna-watch-list" authenticated={authenticated} currentUser={currentUser} component={WannaWatchList}/>
                    <PrivateRoute path="/search" authenticated={authenticated} currentUser={currentUser} component={SearchList}/>
                    <Route path="/login" render={(props) => <Login authenticated={authenticated} {...props} />}/>
                    <Route path="/signup" render={(props) => <Signup authenticated={authenticated} {...props} />}/>
                    <Route path="/oauth2redirect" component={OAuth2RedirectHandler}/>
                    <Route component={NotFound}/>
                </Switch>
                <Alert stack={{limit: 3}}
                       timeout = {3000}
                       position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}

export default App;