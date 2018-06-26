import React from 'react';
import Song from '../Song';
export default class SongList extends React.Component{
    renderSongs() {
        if (!this.props.songs) {
            return;
        }
        return this.props.songs.map((song) => {
            return (
                <Song
                    key={song}
                    name={song}/>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.renderSongs()}
            </ul>
        );
    }
}
