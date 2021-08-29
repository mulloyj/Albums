import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import AppRouter from './router/AppRouter';

ReactDOM.render(
    <React.Fragment>
        <AppRouter />
    </React.Fragment>,
    document.getElementById('root')
);