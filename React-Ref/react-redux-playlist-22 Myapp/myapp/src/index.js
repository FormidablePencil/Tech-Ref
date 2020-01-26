import React from 'react';
import ReactDOM from 'react-dom'; //* This is needed to render into the html document itself.
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'; //? Wtfit?

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
