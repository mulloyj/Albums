import React, { Component } from 'react';
import AlbumDataService from '../services/album.service';

export default class ManualAlbum extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeSpotifyLink = this.onChangeSpotifyLink.bind(this);
        this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
        this.saveAlbum = this.saveAlbum.bind(this);
        this.newAlbum = this.newAlbum.bind(this);
        
        this.state = {
            title: "",
            artist: "",
            spotifyLink: "",
            imageUrl: "",
            submitted: false,
            manualOpen: false,
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeArtist(e) {
        this.setState({
            artist: e.target.value,
        });
    }

    onChangeSpotifyLink(e) {
        this.setState({
            spotifyLink: e.target.value,
        });
    }

    onChangeImageUrl(e) {
        this.setState({
            imageUrl: e.target.value,
        });
    }

    saveAlbum() {
        var album = {
            title: this.state.title,
            artist: this.state.artist,
            spotifyLink: this.state.spotifyLink,
            imageUrl: this.state.imageUrl
        }

        AlbumDataService.create(album)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    artist: res.data.artist,
                    spotifyLink: res.data.spotifyLink,
                    imageUrl: res.data.imageUrl,
                    
                    submitted: true,
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    newAlbum() {
        this.setState({
            title: "",
            artist: "",
            spotifyLink: "",
            imageUrl: "",
            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form manual-add-collapse">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newAlbum}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="artist">Artist</label>
                            <input
                                type="text"
                                className="form-control"
                                id="artist"
                                required
                                value={this.state.artist}
                                onChange={this.onChangeArtist}
                                name="artist"
                            />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="spotifyUrl">Spotify Link</label>
                            <input
                                type="text"
                                className="form-control"
                                id="spotifyUrl"
                                required
                                value={this.state.spotifyLink}
                                onChange={this.onChangeSpotifyLink}
                                name="spotifyUrl"
                            />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image Url</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageUrl"
                                required
                                value={this.state.imageUrl}
                                onChange={this.onChangeImageUrl}
                                name="imageUrl"
                            />
                        </div>
    
                        <button onClick={this.saveAlbum} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}