import * as React from "react";
import './App.css';

import logo from './logo.svg';
import { default as TablePage } from './TablePage';

//const app = next({ dir: './src', dev });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TablePage />
      </div>
    );
  }
}

export default App;