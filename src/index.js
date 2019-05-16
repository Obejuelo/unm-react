import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Route } from 'react-router-dom';

ReactDOM.render(
        <Route>
            <App />
        </Route>, 
        document.getElementById('root'));

serviceWorker.unregister();
