import { ipcRenderer } from 'electron';

export const searchFor = text => ({
    type: 'SEARCH_FOR',
    text
});

export const updateSearchTerm = searchTerm => ({
    type: 'UPDATE_SEARCH_TERM',
    searchTerm
});

export const replaceState = state => ({
    type: 'REPLACE_STATE',
    state
});

export const receiveImages = (searchTerm, json) => ({
    type: 'RECEIVE_IMAGES',
    searchTerm,
    images: json.data.map(child => ({
        id: child.id,
        url: child.images.preview_gif.url
    })),
    receivedAt: Date.now()
});

export const markAsFavourite = image => ({
    type: 'MARK_AS_FAVOURITE',
    image
});

export const clear = text => ({
    type: 'CLEAR'
});

export const getImages = searchText => dispatch => {
    dispatch(searchFor(searchText));
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&limit=15&offset=${0}`)
        .then(response => response.json())
        .then(json => dispatch(receiveImages(searchText, json)));
};
