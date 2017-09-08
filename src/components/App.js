import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import ResultsHeader from '../containers/ResultsHeader';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Giphy Search</h2>
                </div>
                <SearchBox />
                <ResultsHeader />
                <div />
            </div>
        );
    }
}

export default App;
