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
                <input type="submit" className="btn btn-info" value="Search" />
                <input type="button"  className="btn btn-info" value="Clear" onClick={clearTextbox} />
            </div>
        </form>
    );
};

export default Search;
