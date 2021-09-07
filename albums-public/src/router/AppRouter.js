import React, { Component } from 'react';
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
import SpotifyAdd from '../components/SpotifyAdd';
import SpotifyRedirect from '../components/SpotifyRedirect';

export default class AppRouter extends Component {
    state = {
        expiryTime: '0'
    };
    
    componentDidMount() {
        let expiryTime;
        try {
          expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
        } catch (error) {
          expiryTime = '0';
        }
        this.setState({ expiryTime });
    }
    
    setExpiryTime = (expiryTime) => {
        this.setState({ expiryTime });
    };
    
    isValidSession = () => {
        const currentTime = new Date().getTime();
        const expiryTime = this.state.expiryTime;
        const isSessionValid = currentTime < expiryTime;
    
        return isSessionValid;
    };

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Router>
                    <Switch>
                        <Route 
                            path="/albums/add/spotify/redirect/"
                            component={(props) => <SpotifyRedirect setExpiryTime={this.setExpiryTime} {...props}/>}
                            />
                        <Route path="/albums/add/spotify/"
                            component={(props) => <SpotifyAdd 
                                                    isValidSession={this.isValidSession}
                                                    {...this.props}/> }
                            />
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
}