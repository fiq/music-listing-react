import React from 'react';
import './Song.css';
export default class Song extends React.Component{
    render() {
        return (
            <li>
                <div className="Song">{this.props.name}</div>
            </li>
        );
    }
}