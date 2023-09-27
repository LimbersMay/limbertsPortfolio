import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioApp from './PortfolioApp.tsx'
import {BrowserRouter} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <PortfolioApp/>
        </BrowserRouter>
    </React.StrictMode>,
)
