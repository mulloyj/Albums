import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        HomeClass: '',
        CurrentClass: '',
        AlbumListClass: '',
        AddClass: '',
    };

    componentDidMount() {
        const path = window.location.pathname;

        switch (path) {
            case '/':
                this.setState({HomeClass: 'active'});
                break;
            case '/albums/add/':
                this.setState({AddClass: 'active'});
                break;
            case '/albums/spotify':
                this.setState({AddClass: 'active'});
                break;
            case '/albums/current/':
                this.setState({CurrentClass: 'active'});
                break;
            case '/albums/':
                this.setState({AlbumListClass: 'active'});
                break;
            default:
                this.setState({HomeClass: '', CurrentClass: '', AlbumListClass: ''});
        }
    }

    render() { 
        return ( 
            <ul className="navigation">
                <li><a href="/" className={this.state.HomeClass}>Home</a></li>
                <li><a href="/albums/current/" className={this.state.CurrentClass}>Current</a></li>
                <li><a href="/albums/" className={this.state.AlbumListClass}>Album List</a></li>
                <li><a href="/albums/add/" className={this.state.AddClass}>Add an Album</a></li>
                <li className={"float-right about"}><a href="/about/">About</a></li>
            </ul>
         );
    }
}
 
export default Navbar;