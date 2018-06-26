import React from 'react';
import Artist from '../Artist';
export default class ArtistList extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Returns a list of rendered artists
     * @return {Array}
     */
    renderArtists() {
        if (!this.props.artists) {
            return;
        }
        return Object.keys(this.props.artists).map((artist) => {
            return (
                <Artist
                    key={artist}
                    name={artist}
                    albums={this.props.artists[artist]}></Artist>
            );
        });
    }

    /**
     * Render a list of artists
     * @return {XML}
     */
    render() {
        return (
        <ul>
            {this.renderArtists()}
        </ul>
        );
    }
}