import React from 'react';
import Album from '../Album';

export default class AlbumList extends React.Component {
    renderAlbums(){
        return Object.keys(this.props.albums).map((album) => {
//            debugger;
            return (
                <Album
                    key={album}
                    name={album} songs={this.props.albums[album]} />
            );
        });
    }
    render() {
        return (
            <ul>
                {this.renderAlbums()}
            </ul>
        );
    }
}
