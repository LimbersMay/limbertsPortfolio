import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import PortfolioApp from './PortfolioApp.tsx'
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PortfolioApp/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
