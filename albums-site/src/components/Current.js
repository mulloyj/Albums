import React, { Component } from 'react';

class Current extends Component {
    state = { 
        albums: [
            {id: 0, title: 'Wish you were here', artist: 'Pink Floyd', spotify: 'spotify:album:0bCAjiUamIFqKJsekOYuRw', imageURL: 'https://i.scdn.co/image/ab67616d0000b273d8fa5ac6259dba33127b398a'}
        ]
    };

    render() { 
        return ( 
            <div className="current-album">
                <h1 className="album-title">{this.state.albums[0].title}</h1>
                <h2>{this.state.albums[0].artist}</h2>
                <img src={this.state.albums[0].imageURL} alt="album cover"/>
                <a href={this.state.albums[0].spotify}></a>
            </div>
         );
    }
}
 
export default Current;