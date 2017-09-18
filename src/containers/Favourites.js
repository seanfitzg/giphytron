import React from 'react';
import { connect } from 'react-redux';
import FavouritesList from '../components/FavouritesList';

const mapStateToProps = state => ({
    saveImages: state.saveImages
});

const Favourites = connect(mapStateToProps)(FavouritesList);

export default Favourites;
