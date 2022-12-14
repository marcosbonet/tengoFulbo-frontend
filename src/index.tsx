import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css';
import { App } from './infrastructure/components/app/app';
import { Provider } from 'react-redux';
import { appStore } from './infrastructure/store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
