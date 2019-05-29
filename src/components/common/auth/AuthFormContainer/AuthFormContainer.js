import React from 'react';
import {Paper} from '@material-ui/core';

import styles from './AuthFormContainer.module.scss';

const AuthFormContainer = (props) => <Paper color="primary" className={styles.loginContainer}>
    {props.children}
</Paper>;

export default AuthFormContainer;