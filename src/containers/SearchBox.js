import React from 'react';
import { connect } from 'react-redux';
import { getImages, clear } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

const mapDispatchToProps = {
    getImages,
    clear
};

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchBox;
