import PropTypes from 'prop-types';
import React, { Component } from 'react';

const FavouritesList = ({ saveImages }) => {
    return (
        <div>
            {saveImages && saveImages.images.length > 0 ? (
                <div className="favourites">
                    <div>Saved Images...</div>
                    <div>
                        <ul>
                            {saveImages.images.map(image => (
                                <li key={image.id}>
                                    <img src={image.url} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default FavouritesList;
