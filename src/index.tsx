import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"

import App from './App'
import ScrollToTop from './components/ScrollToTop'
import './scss/app.scss'
import { persistor, store } from './store/store'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>

        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ScrollToTop />
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>
)


