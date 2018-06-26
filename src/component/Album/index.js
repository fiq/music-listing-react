import React from 'react';
import SongList from '../SongList';
import './Album.css';
export default class Album extends React.Component {
    // TODO - this pattern needs factoring into a HOC
    constructor(props){
        super(props);

        // TODO: BADBADME - control this state via redux
        this.state = {hidden: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log("In toggle", this.state);
        this.setState({hidden: !this.state.hidden});
    }
    renderToggleButton() {
        const indicator = this.state.hidden ? '+' : '-';
        return (
            <button className="Album-toggle" onClick={this.toggle}>
                {indicator}
            </button>
        )
    }
    render() {
        return (
            <li>
                <div className="Album">
                    {this.props.name} {this.renderToggleButton()}

                    {!this.state.hidden && (
                        <SongList songs={this.props.songs}/>
                    )}
                </div>
            </li>
        );
    }
}