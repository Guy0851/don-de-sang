import React from 'react';
import logo from '../../img/logo-don-de-sang.webp';

function Header() {
    return (
        <header className="App-header">
            <img 
            className='logo-don-sang'
            src={logo}
            alt='Logo de la plateforme "mon don"'/>
            <h1 id='titre'>
                Plateforme Mon Don
            </h1>
        </header>
    );
}

export default Header;