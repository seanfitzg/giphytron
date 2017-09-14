import React from 'react';
import ResultsList from '../components/ResultsList';
import { connect } from 'react-redux';
import { markAsFavourite } from '../actions';

const mapStateToProps = state => ({
    searchResults: state.searchResults,
    saveImages: state.saveImages    
});

const mapDispatchToProps = {
    markAsFavourite
};

const ResultsHeader = connect(mapStateToProps, mapDispatchToProps)(ResultsList);

export default ResultsHeader;
