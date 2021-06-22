import './App.css';
import Counter from './components/counter';
import CounterClick from './components/counterClick';

function App() {
  return (
    <div className="App">
      <Counter title = 'counter prop'/>
      <CounterClick title = 'counter click'/>
    </div>
  );
}

export default App;
