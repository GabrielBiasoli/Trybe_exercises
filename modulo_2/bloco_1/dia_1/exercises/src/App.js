import logo from './logo.svg';
import './App.css';

const itemsList = ['Comer', 'Estudar', 'Fazer os exercícios', 'Escutar músicas ;)']
const Task = (value) => {
  return (
    <li>{value}</li>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {itemsList.map(item => Task(item))}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
