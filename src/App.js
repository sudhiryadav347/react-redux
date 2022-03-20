import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
