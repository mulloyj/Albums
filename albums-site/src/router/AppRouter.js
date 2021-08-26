import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Current from '../components/Current';

export default function AppRouter() {
    return (
        <React.Fragment>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/albums/current/">
                        <Current />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}