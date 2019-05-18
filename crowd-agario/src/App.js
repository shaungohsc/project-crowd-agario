import React from 'react';
import './App.css';
import CrowdChart from './CrowdChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Crowd Agario"
          href="https://agar.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CROWD AGARIO - Crowd Visualisation and Analytics
        </a>
      </header>
      <body className="App-body">
        <CrowdChart/>
      </body>
    </div>
  );
}

export default App;
