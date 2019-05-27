import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './components/App';

import rootReducer from './reducers';

import './global.module';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#91c6ff',
        }
    },
    status: {
        danger: 'orange',
    },
});

const store = createStore(rootReducer);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

export function dispatch() {
    return store.dispatch.apply(store, arguments);
}

module.hot.accept();
