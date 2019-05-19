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
      coordListList: DummyCoord.coordArr,
      index: 0
    };

    this.updateCoordList = this.updateCoordList.bind(this);
    this.fetch = this.fetch.bind(this);
    this.maxCount = this.peakCount.bind(this);
    this.averageCount = this.averageCount.bind(this);
  }

  componentDidMount() {
       // fetches x,y json data once every 1000 ms
       var coordListList = DummyCoord.coordArr;
       this.setState({
         coordListList: coordListList
       });
   
       this.timer = setInterval(
        () => {
          this.setState({index: this.state.index++});
          this.setState({coordList: DummyCoord.coordArr[this.state.index]})
         }, 
        500
      );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  fetch() {
    // fetches x,y json data once every 1000 ms
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
    this.setState({
      coordList: updatedList
    });
  }

      
  peakCount() {
    let data = this.state.coordListList;
    console.log(data);
    let max = 0;

    for(let i=0; i<data.length; i++) {
        if(data[i].length > max) {
            max = data[i].length;
        }
    }
    console.log(max);
    return Math.round((max + 0.00001) * 100) / 100;
}

averageCount = () => {
    let data = this.state.coordListList;
    console.log(data);
    let sum = 0;

    for(let i=0; i<data.length; i++) {
        sum += data[i].length;
    }
    console.log(sum/data.length);
    return Math.round(((sum / data.length) + 0.00001) * 100) / 100;
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
          Crowd Agario
      </header>
      <div className="App-body">     
        <div className="crowd-data">
          <CrowdChart className="crowd-chsart" store={this.state} update={this.fetch} />
          <p className="crowd-counter">Current human traffic: {this.state.coordList.length} humans </p>
        </div>
    
        <div className="crowd-data">
          <TrendChart className="trend-chart" coordListList={this.state.coordListList}/>
          <p className="crowd-counter">Peak human traffic: {this.peakCount()} humans </p>
          <p className="crowd-counter">Average human traffic: {this.averageCount()} humans </p>
        </div>

        <div>

        </div>

      </div>
    </div>
  );
  }
}

export default App;
