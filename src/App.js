import './App.css';
import NavBar from './components/NavBar';
import me from './assets/bull.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={me} className="App-logo" alt="logo" />      
        <h1>Hello there!</h1> 
      </header>
    </div>
  );
}

export default App;
