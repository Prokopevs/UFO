import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/sidebarComponents/Sidebar"
import Article from "./pages/Article";
import Home from "./pages/Home";

import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from "./hooks/redux";


const App = () => {
    return (
        <div className="page">
            <Header />
            <Sidebar />
            <main className="main">
                <div className="container">
                    <Routes>
                        <Route path="/ufo" element={<Home />} />
                        <Route path="/article" element={<Article />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
