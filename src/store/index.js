import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {initialState, fetchArtistsReducer} from '../reducer/fetchArtists';

/**
 * Creates and configures a redux store
 * @return {Store} with an artist reducer
 */
export function configureStore() {
    const middleware = applyMiddleware(thunk);
    const store = createStore(fetchArtistsReducer, initialState, middleware);
    return store;
}
