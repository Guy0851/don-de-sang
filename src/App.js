import './App.css';
import MySpace from './component/space-component/space';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='titre'>
          Plateforme Mon Don
        </h1>
      </header>

      <body className='App-body'>
        <MySpace/>
      </body>
      
      <footer className='App-footer'>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          (doc officielle react)
        </a>
      </footer>
    </div>
  );
}

export default App;
