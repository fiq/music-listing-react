import React from 'react';
export default class Song extends React.Component{
    render() {
        return (
            <li>
                {this.props.name}
            </li>
        );
    }
}