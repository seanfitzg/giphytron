import React from 'react';
import { connect } from 'react-redux';
import { getImages, clear, updateSearchTerm } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

const mapDispatchToProps = {
    getImages,
    clear,
    updateSearchTerm
};

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchBox;
