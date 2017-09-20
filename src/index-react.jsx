import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { ipcRenderer } from 'electron';
import { replaceState } from './actions';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById('App')
    );
};

render();
if (module.hot) {
    module.hot.accept(render);
}

ipcRenderer.on('save-as', function() {
    ipcRenderer.send('save-as-file', JSON.stringify(store.getState()));
});

ipcRenderer.on('replace-state', function(event, file) {
    let state = JSON.parse(file);
    store.dispatch(replaceState(state));
});
