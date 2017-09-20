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
        case 'REPLACE_STATE':
            return action.state.searchResults;
        case 'UPDATE_SEARCH_TERM':
            return Object.assign({}, state, { searchTerm: action.searchTerm });
        default:
            return state;
    }
};

const saveImages = (state = { images: [] }, action) => {
    switch (action.type) {
        case 'MARK_AS_FAVOURITE':
            if (!state.images.find(image => image.id === action.image.id))
                return {
                    images: [...state.images, action.image]
                };
            return state;
        case 'CLEAR':
            return defaultState;
        case 'REPLACE_STATE':
            return action.state.saveImages;
        default:
            return state;
    }
};

export default combineReducers({
    searchResults,
    saveImages
});
