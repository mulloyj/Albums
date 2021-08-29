import React, { Component } from 'react';
import Album from './Album';
import AlbumDataService from '../services/album.service';

class Current extends Component {
    state = { 
        error: null,
        isLoaded: false,
        isEmpty: false,
        album: { id: null, title: "", artist: "", spotifyLink: "", imageUrl: ""},
    };

    componentDidMount() {
        AlbumDataService.getCurrent()
            .then(res => {
                if (!res.data) {
                    this.setState({
                        isEmpty: true,
                        isLoaded: true
                    });
                } else {
                    this.setState({
                        isLoaded: true,
                        album: {
                            id: res.data.id,
                            title: res.data.title,
                            artist: res.data.artist,
                            spotifyLink: res.data.spotifyLink,
                            imageUrl: res.data.imageUrl,
                        }
                    });
                }
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
    }

    render() { 
        const { error, isLoaded, album, isEmpty } = this.state;
        if (error) return <div>Error: {error.message}</div>;
        else if (!isLoaded) return null;
        else if (isEmpty) return <h2>There is no current album.</h2>;
        else return (
            <Album album={album}/>
        );
        
    }
}
 
export default Current;