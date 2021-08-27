import React, { Component } from 'react';
import spotifyBlack from '../images/spotify-black.png';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            album: this.props.album,
         };
    }
    render() { 
        return ( 
            <div className="album-info">
                <h1 className="album-title">{this.state.album.title}</h1>
                <h2>{this.state.album.artist}</h2>
                <img src={this.state.album.imageURL} alt="album cover"/>
                <a href={this.state.album.spotify} style={{width: '30px'}}><img src={spotifyBlack} className="spotify-icon" alt="spotify icon"/></a>
            </div>
        );
    }
}
 
export default Album;