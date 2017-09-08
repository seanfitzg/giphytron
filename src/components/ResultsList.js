import React from 'react';

const ResultsList = props => {
    if (props.searchResults.isSearching) {
        return <div>I'm searching</div>;
    }

    return (
        <div>
            {props.searchResults.searchComplete
                ? <div>
                      <span>
                          The following was found matching the term '{props.searchResults.searchTerm}'
                      </span>
                      <ul>
                          {props.searchResults.images.map(image =>
                              <li key={image.id}>
                                  <img src={image.url}></img>
                              </li>
                          )}
                      </ul>
                  </div>
                : ''}
        </div>
    );
};

export default ResultsList;
