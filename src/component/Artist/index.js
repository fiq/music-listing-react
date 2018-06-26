import React from 'react';
import AlbumList from '../AlbumList';
/**
 * Renders an Artist an drills down to songs
 */
export default class Artist extends React.Component {
    /**
     * Renders an artist by itself
     * @return {XML}
     */
    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <AlbumList albums={this.props.albums}/>
            </li>
        );
    }
}
