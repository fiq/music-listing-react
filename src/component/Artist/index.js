import React from 'react';
import AlbumList from '../AlbumList';
import './Artist.css';
/**
 * Renders an Artist an drills down to songs
 */
export default class Artist extends React.Component {
    // TODO - this pattern needs factoring into a HOC
    constructor(props){
        super(props);

        // TODO - put behaviour in a reducer
        this.state = {hidden: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({hidden: !this.state.hidden});
    }
    renderToggleButton() {
        const indicator = this.state.hidden ? '+' : '-';
        return (
            <button className="Artist-toggle" onClick={this.toggle}>
                {indicator}
            </button>
        )
    }
    /**
     * Renders an artist by itself
     * @return {XML}
     */
    render() {
        return (
            <li>
                <div className="Artist">
                    {this.props.name} {this.renderToggleButton()}
                    {!this.state.hidden && (
                        <AlbumList albums={this.props.albums}/>
                    )}
                </div>
            </li>
        );
    }
}
