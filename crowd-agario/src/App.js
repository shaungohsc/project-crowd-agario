import React from 'react';
import './App.css';
import CrowdChart from './CrowdChart';
import { NewCoord1, NewCoord2 } from './NewCoord';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordList: NewCoord1.coordList
    };

    this.updateCoordList = this.updateCoordList.bind(this);
  }

  fetch() {
    // fetches x,y json data once every 1000 ms
    console.log('hihi')
  }

  updateCoordList() {
    console.log('bears')
    this.setState({
      coordList: NewCoord2.coordList
    });
  }

  render() {
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
        </a>
      </header>
      <div className="App-body">
        <CrowdChart store={this.state} update={this.updateCoordList} />
      </div>
    </div>
  );
  }
}

export default App;
