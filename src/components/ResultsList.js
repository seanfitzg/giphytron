import React from 'react';
import { ipcRenderer } from 'electron';

class ResultsList extends React.Component {
    constructor() {
        super();
        let that = this;
        ipcRenderer.on('info', function(event, data) {
            that.props.markAsFavourite(1);
        });
    }

    render() {
        if (this.props.searchResults.isSearching) {
            return <div>I'm searching</div>;
        }

        return (
            <div>
                {this.props.searchResults.searchComplete ? (
                    <div>
                        <span>The following was found matching the term '{this.props.searchResults.searchTerm}'</span>
                        <ul>
                            {this.props.searchResults.images.map(image => (
                                <li key={image.id}>
                                    <img className="context-menu" src={image.url} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const contextMenuBtn = document.getElementsByClassName('context-menu');
        if (contextMenuBtn.length > 0) {
            contextMenuBtn[0].addEventListener('contextmenu', function(evt) {
                ipcRenderer.send('show-context-menu');
            });
        }
    }
}

export default ResultsList;
