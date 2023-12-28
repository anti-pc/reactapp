//import logo from './logo.svg';
import './App.css';
import User from "./components/User"

function App() {
  return (
    <div className="container">
      <h1 className='header'>test another component</h1>
      <h1 style={{color:"red"}}>{1 + 5} - {"ankara".toUpperCase()}</h1>
      
      <User></User>
      <User></User>
      <User></User>
      <User></User>

    </div>
  );
}

export default App;
