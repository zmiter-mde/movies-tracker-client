import React from 'react';
import {Paper} from '@material-ui/core';

import styles from './AuthFormContainer.module.scss';

const AuthFormContainer = (props) => <Paper color="primary" className={styles.loginContainer}>
    <div className={styles.verticallyCentered}>
        {props.children}
    </div>
</Paper>;

export default AuthFormContainer;