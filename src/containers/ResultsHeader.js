import React from 'react';
import ResultsList from '../components/ResultsList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

const ResultsHeader = connect(mapStateToProps)(ResultsList);

export default ResultsHeader;
