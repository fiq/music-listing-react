import {LOAD_ARTIST_DATA, RETRIEVED_ARTIST_DATA, FAILED_ARTIST_DATA} from '../action/actionTypes';
export const initialState = {
    artists: {},
};

/**
 * Reducers for loading artist information
 * @param {object} state - Current State
 * @param {string} action type
 * @return {state} derived from current loading action
 */
export function fetchArtistsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTIST_DATA: {
            return {...state, fetching: true, artists: {}};
        }
        case RETRIEVED_ARTIST_DATA: {
            return {...state, fetching: false, artists: action.data};
        }
        case FAILED_ARTIST_DATA: {
            return {
                ...state,
                fetching: false, artists: {}, error: action.error};
        }
        default: {
            return state;
        }
    };
}
