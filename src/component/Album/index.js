import React from 'react';
import SongList from '../SongList';

export default class Album extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.name}
                </p>
                <SongList songs={this.props.songs}/>
            </li>
        );
    }
}