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
            }
        default:
            return defaultState;
    }
};

export default combineReducers({
    searchResults
});
