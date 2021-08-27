import React, { Component } from 'react';
import Album from './Album';

class Current extends Component {
    state = { 
        albums: [
            {id: 0, title: 'Wish you were here', artist: 'Pink Floyd', spotify: 'spotify:album:0bCAjiUamIFqKJsekOYuRw', imageURL: 'https://i.scdn.co/image/ab67616d0000b273d8fa5ac6259dba33127b398a'}
        ]
    };

    render() { 
        return ( 
            <Album album={this.state.albums[0]}/>
         );
    }
}
 
export default Current;