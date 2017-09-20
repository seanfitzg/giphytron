import React from 'react';
import { ipcRenderer } from 'electron';

class ResultsList extends React.Component {
    constructor() {
        super();
        let that = this;
        ipcRenderer.on('addimage', function(event, image) {
            that.props.markAsFavourite(image);
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
                        <div className="container">
                            <ul className="list-group">
                                {this.props.searchResults.images.map(image => (
                                    <li className="list-group-item" key={image.id}>
                                        <img className="giphy-image" src={image.url} />
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
    }

    componentDidUpdate(prevProps, prevState) {
        let that = this;
        const images = document.getElementsByClassName('giphy-image');
        const imagesArray = Array.prototype.slice.call(images);
        if (imagesArray.length > 0) {
            imagesArray.forEach((image, index) => {
                image.addEventListener('contextmenu', function(evt) {
                    let selectedImage = that.props.searchResults.images.find(i => i.url === image.src);
                    ipcRenderer.send('show-context-menu', selectedImage);
                });
            });
        }
    }
}

export default ResultsList;
