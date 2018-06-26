import { RETRIEVED_ARTIST_DATA, FAILED_ARTIST_DATA } from './actionTypes';
import artistDataTransfomer from './artistDataTransformer.js';
import axios from 'axios';

const ARTIST_FEED_URL = 'http://localhost:3000/data.json';
/**
 * action loader to retrieve artist data
 * @return {function(*)} dispatcher which fetches and async posts artist data
 */
export function loadArtistData() {
    return (dispatch) => {
        return axios.get(ARTIST_FEED_URL).then((response) => {
            dispatch({
                type: RETRIEVED_ARTIST_DATA,
                data: artistDataTransfomer(response.data)});
        }).catch((err) => dispatch({type: FAILED_ARTIST_DATA, error: err}));
    };
}

