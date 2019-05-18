import React from 'react';
import './App.css';
import CrowdChart from './CrowdChart';
import TrendChart from './TrendChart';
import { NewCoord1, NewCoord2 } from './NewCoord';
import DummyCoord from './DummyCoord.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordList: DummyCoord.coordArr[0],
      coordListList: DummyCoord.coordArr
    };

    this.updateCoordList = this.updateCoordList.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    // fetches x,y json data once every 1000 ms
    console.log('hihi');
    var coordListList = DummyCoord.coordArr;
    this.setState({
      coordListList: coordListList
    });

    for(var i = 0; i<coordListList.length; i++){
      let k = i;
      setTimeout(() => {
        console.log(k);
        var coordList = coordListList[k];
        this.updateCoordList(coordList);
      }, 700 * (k + 1));
  }
  }

  updateCoordList(updatedList) {
    console.log('bears')
    this.setState({
      coordList: updatedList
    });
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Crowd Agario - Crowd Analytics
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
        <div className="live-crowd-data">
          <CrowdChart className="crowd-chsart" store={this.state} update={this.fetch} />
          <p className="crowd-counter"><strong>Current Count: {this.state.coordList.length} Persons </strong></p>
        </div>
    
        <div className="historic-crowd-data">
          <TrendChart className="trend-chart" coordListList={this.state.coordListList}/>
          <p className="crowd-counter"><strong>Peak human traffic: {TrendChart.averageCount} Persons </strong></p>
          <p className="crowd-counter"><strong>Average human traffic: {TrendChart.peakCount} Persons </strong></p>
        </div>

        <div>

        </div>

      </div>
    </div>
  );
  }
}

export default App;
