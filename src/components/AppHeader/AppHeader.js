import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import {Typography, InputBase, AppBar, Toolbar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './AppHeader.module.scss';
import {DEFAULT_PAGE_SIZE, loadAllMovies} from '../../actions/moviesActions';
import {connect} from 'react-redux';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class AppHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    componentWillMount() {
        this.timer = null;
    }

    onSearchChange(e) {
        if (e.target.value) {
            clearTimeout(this.timer);

            this.setState({ value: e.target.value });

            this.timer = setTimeout(this.triggerChange.bind(this), WAIT_INTERVAL);
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.triggerChange();
        }
    }

    triggerChange() {
        loadAllMovies(0, DEFAULT_PAGE_SIZE, "Search", this.state.value, true)
            .then(() => {
                this.props.history.push("/search");
            });
    }

    render() {
        return <AppBar position="relative" className={styles.appHeader}>
            <Toolbar>
                <Link to="/"><Typography variant="h5" color="primary">Movies Tracker</Typography></Link>
                { this.props.authenticated &&
                    <React.Fragment>
                        <NavLink to="/wanna-watch-list" className={styles.actionButton}><Typography variant="button" color="primary">Wanna Watch List</Typography></NavLink>
                        <div className={styles.search}>
                            <div className={styles.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                color="primary"
                                margin="none"
                                className={styles.searchInput}
                                onChange={this.onSearchChange.bind(this)}
                                onKeyDown={this.handleKeyDown.bind(this)}/>
                        </div>
                    </React.Fragment> }
                <div className={styles.actionsContainer}>
                    { this.props.authenticated ?
                        <Typography
                            variant="button"
                            onClick={this.props.onLogout}
                            color="primary"
                            className={styles.actionButton}>
                            Logout
                        </Typography>
                    : <React.Fragment>
                        <NavLink to="/login" className={styles.actionButton}><Typography variant="button" color="primary">Login</Typography></NavLink>
                        <NavLink to="/signup" className={styles.actionButton}><Typography variant="button" color="primary">Sign Up</Typography></NavLink>
                    </React.Fragment> }
                </div>
            </Toolbar>
        </AppBar>;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movieSearch.movies,
        allMoviesLoaded: state.movies.movieSearch.allMoviesLoaded,
        isLoading: state.movies.movieSearch.isLoading
    };
}

export default withRouter(connect(mapStateToProps)(AppHeader));