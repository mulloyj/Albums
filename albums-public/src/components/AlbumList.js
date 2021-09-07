import React, { Component } from 'react';
import AlbumDataService from '../services/album.service';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        }
    }

    componentDidMount() {
        AlbumDataService.getAll()
            .then(res => {
                this.setState({
                    albums: res.data,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { albums } = this.state

        return (
            <ul className="list-group">
                {albums && albums.map((album) => (
                    <li className={"list-group-item"} key={album.id}>
                        <a href={"/albums/" + album.slug + "/"} className="album-link">{album.title}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default AlbumList;