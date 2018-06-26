import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../action';
import ArtistList from "../ArtistList/index";


/* eslint react/prop-types: 0 */
/**
 * Artist Smart Composite
 */
class ArtistContainer extends React.Component {
    /**
     * Constructor
     * @param {props} props
     */
    constructor(props) {
        super(props);
    }
    /**
     * Request Album Data Before Mounting
     * Note that componentWillMount seems to be deprecated in React 16.3
     */
    componentDidMount() {
        // TODO: componentWillMount is deprecated in React 16
        this.props.artistData.loadArtistData();
    }
    /**
     * Render child components
     * @return {component} ArtistList dom
     */
    render() {
        debugger;
        return (
            <ul>
                <ArtistList artists={this.props.artists}/>
            </ul>
        );
    }
};

/**
 * Map global store state changes to props
 * @param {*} state
 * @param {*} ownProps
 * @return {object} representing new props
 */
function mapStateToProps(state={}) {
    debugger;
    return {
        artists: state.artists,
    };
}

/**
 * Map redux dispatchers to props
 * @param {Function} dispatch
 * @return {Function|Object|*} mapping table
 */
function mapDispatchToProps(dispatch) {
    return {                          y fil
        artistData: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
