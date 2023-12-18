import './App.css';
import MySpace from './component/space-component/space';
import Header from './component/header/header';



function App() {
  return (
    <div className="App">
      <Header/>
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
          (Documentation officielle react)
        </a>
      </footer>
    </div>
  );
}

export default App;
