import logo from './logo.svg';
import './App.css';

function App() {
  const fn =()=>{
    alert('I am Clicked');
  };
  return (
    <div className="App">
       <h1>The Simple React Application</h1>
       <input type="button" value="Click Me" onClick={fn}/>
    </div>
  );
}

export default App;
