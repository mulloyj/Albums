import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Current from '../components/Current';
import AddAlbum from '../components/AddAlbum';
import AlbumList from '../components/AlbumList';
import AlbumBySlug from '../components/AlbumBySlug';

export default function AppRouter() {
    return (
        <React.Fragment>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/albums/add/">
                        <AddAlbum />
                    </Route>
                    <Route path="/albums/current/">
                        <Current />
                    </Route>
                    <Route path="/albums/:slug/" component={AlbumBySlug} />
                    <Route path="/albums/">
                        <AlbumList />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}