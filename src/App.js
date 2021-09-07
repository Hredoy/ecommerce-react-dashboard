import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <button>Simple Button</button>
      <Button>Bootstrap Button</Button>
    </div>
  );
}

export default App;
