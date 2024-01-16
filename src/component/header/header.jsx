import logo from '../../img/logo-don-de-sang.webp';
import RegisterLogin from './register+login';


function Header() {
    return (
        <header className="App-header">
            <a id='home-link' href='/'>
                <img 
                className='logo-don-sang'
                src={logo}
                alt='Logo de la plateforme "mon don"'/>
            </a>
                <h1 id='titre'>
                    Plateforme Mon Don
                </h1>
            <span id='register-login'>
                <RegisterLogin/>
            </span>
        </header>
    );
}

export default Header;