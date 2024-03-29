import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';

import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();