import logo from "./logo.svg";
import "./App.css";

import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Marie-France" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <Counter />
      </body>
    </div>
  );
}

export default App;
