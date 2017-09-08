import React from 'react';

const Search = ({ getImages, clear }) => {
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

    return (
        <form onSubmit={submitForm}>
            <div>
                Search for a Giphy:
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <input type="submit" value="Search" />
                <input type="button" value="Clear" onClick={clearTextbox} />
            </div>
        </form>
    );
};

export default Search;
