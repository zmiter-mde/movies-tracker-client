import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './AppHeader.module.scss';
import {Link, NavLink} from 'react-router-dom';

class AppHeader extends React.Component {

    render() {
        return <AppBar position="relative" className={styles.appHeader}>
            <Toolbar>
                <Link to="/"><Typography variant="h5" color="primary">Movies Tracker</Typography></Link>
                <div className={styles.actionsContainer}>
                    { this.props.authenticated ? <React.Fragment>
                        <NavLink to="/profile" className={styles.actionButton}><Typography variant="button" color="primary">Profile</Typography></NavLink>
                        <Typography variant="button" onClick={this.props.onLogout} color="primary" className={styles.actionButton}>Logout</Typography>
                    </React.Fragment> : <React.Fragment>
                        <NavLink to="/login" className={styles.actionButton}><Typography variant="button" color="primary">Login</Typography></NavLink>
                        <NavLink to="/signup" className={styles.actionButton}><Typography variant="button" color="primary">Sign Up</Typography></NavLink>
                    </React.Fragment> }
                </div>
            </Toolbar>
        </AppBar>;
    }
}

export default AppHeader;