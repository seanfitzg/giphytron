import React from 'react';

const Search = ({ getImages, clear, searchResults, updateSearchTerm }) => {
    let input;

    let submitForm = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            clear();
            return;
        }
        getImages(input.value);
    };

    let clearTextbox = e => {
        clear();
        input.value = '';
    };

    let handleChange = e => {
        updateSearchTerm(e.target.value);
    };

    return (
        <form onSubmit={submitForm}>
            <div className="search-form">
                Search for a Giphy:
                <input
                    value={searchResults.searchTerm}
                    onChange={handleChange}
                    ref={node => {
                        input = node;
                    }}
                />
                <input type="submit" className="btn btn-info" value="Search" />
                <input type="button" className="btn btn-info" value="Clear" onClick={clearTextbox} />
            </div>
        </form>
    );
};

export default Search;
