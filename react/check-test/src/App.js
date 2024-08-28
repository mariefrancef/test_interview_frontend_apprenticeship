import logo from "./logo.svg";
import "./App.css";
import "./Greeting.css";
import "./Counter.css";
import Greeting from "./Greeting";
import Counter from "./Counter";
import ListOfNames from "./ListOfNames";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Marie-France" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <Counter />
        <ListOfNames />
      </body>
    </div>
  );
}

export default App;
