import React, { Component } from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions'; 

export default class SpotifyRedirect extends Component {
    componentDidMount() {
        const { setExpiryTime, location } = this.props;
        try {
            console.log('redirect');
            if (_.isEmpty(location.hash)) {
                return this.props.history.push('/albums/add/spotify/');
            }

            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            setExpiryTime(expiryTime);
            this.props.history.push('/albums/add/spotify/');
        } catch (error) {
            this.props.history.push('/albums/add/');
        }
    }

    render() {
        console.log('redirect page');
        return null;
    }
}