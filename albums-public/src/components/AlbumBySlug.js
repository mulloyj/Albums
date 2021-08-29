import React, { Component } from 'react';
import AlbumDataService from '../services/album.service';
import Album from './Album';

class AlbumById extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            album: {},
            id: null,
            isLoaded: false,
            error: null,
         };
    }

    componentDidMount() {
        AlbumDataService.findBySlug(this.props.match.params.slug)
            .then(res => {
                this.setState({
                    album: res.data[0],
                    isLoaded: true,
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }

    render() { 
        const { error, isLoaded, album } = this.state;

        if (error) return <div>Error: {error.message}</div>;
        else if (!isLoaded) return null;
        else return <Album album={album} />
    }
}
 
export default AlbumById;