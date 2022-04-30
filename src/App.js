import React from 'react';
import logoSvg from './assets/img/ufo-2.png';



function App() {
    return (
        <div className="page">
            <header className="header">
            <div className='header__inner'>
                    <img className='header__logo' src={logoSvg} alt="ufo logo"></img>
                    <div className='header__name'>LANIAKEA</div>
                </div>
            </header>

            <aside className="sidebar">
                <div className='sidebar__categories'>
                </div>
            </aside>

            <main className="main">
                <div className="container">
                    Hello!
                </div>
            </main>
        </div>
    );
}

export default App;
