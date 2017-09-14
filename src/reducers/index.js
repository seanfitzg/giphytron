import { combineReducers } from 'redux';

const defaultState = {
    images: [],
    searchTerm: ''
};

const searchResults = (state = defaultState, action) => {
    switch (action.type) {
        case 'SEARCH_FOR':
            return {
                isSearching: true,
                searchTerm: action.text
            };
        case 'RECEIVE_IMAGES':
            return {
                isSearching: false,
                searchTerm: action.searchTerm,
                images: action.images,
                searchComplete: true
            };
        case 'CLEAR':
            return defaultState;
        default:
            return state;
    }
};

const saveImages = (state = [], action) => {
    switch (action.type) {
        case 'MARK_AS_FAVOURITE':
            state.push(action.id);
            return state;
            break;
        default:
            return state;
    }
};

export default combineReducers({
    searchResults,
    saveImages
});
