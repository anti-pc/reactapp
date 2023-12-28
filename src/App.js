//import logo from './logo.svg';
import './App.css';
import User from "./components/User"

function App() {
  return (
    <div className="App">
      <h1>test another component</h1>
      <h1>{1 + 5} - {"ankara".toUpperCase()}</h1>
      
      <User></User>
      <User></User>
      <User></User>
      <User></User>

    </div>
  );
}

export default App;
