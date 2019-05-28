import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import WannaWatchList from './WannaWatchList';

import styles from './App.module.scss';

class AppInitial extends React.Component {

    render() {
        return <div className={styles.appWrapper}>
            <AppBar position="absolute" className={styles.appHeader}>
                <Toolbar>
                    <Typography variant="h5" color="initial">
                        Wanna Watch List
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={styles.appBody}>
                <WannaWatchList/>
            </div>
        </div>;
    }
}

export default AppInitial;