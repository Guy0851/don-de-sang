import MySpace from '../component/space-component/space';
import Header from '../component/header/header';

export default function Home() {
    return (
        <>
            <Header/>
        <body className='App-body App'>
            <MySpace/>
        </body>
        <footer className='App-footer'>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
                (Documentation officielle react)
            </a>
        </footer>
        </>
    )
}