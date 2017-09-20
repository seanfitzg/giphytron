import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import ResultsHeader from '../containers/ResultsHeader';
import Favourites from '../containers/Favourites';

class App extends Component {
    render() {
        return (
            <div className="App"  className="container">
                <div className="App-header" className="page-header">
                    <h2>Giphy Search</h2>
                </div>
                <SearchBox />
                <ResultsHeader />
                <Favourites />
                <div />
            </div>
        );
    }
}

export default App;
