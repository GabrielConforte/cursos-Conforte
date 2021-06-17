import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListcontainer from './components/ItemListcontainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/><ItemListcontainer></ItemListcontainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <ItemCount initial={0} stock={10}></ItemCount>
         Gabriel conforte
         
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Va a aprender react
        </a>
      </header>
    </div>
  );
}

export default App;
