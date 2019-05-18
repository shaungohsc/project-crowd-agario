import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class TrendChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        var dataTransf = [];
        var temp = this.props.coordListList;

        for(let i=0; i<temp.length; i++) {
            dataTransf[i] = {hour: i+1, people: temp[i].length};
            console.log(dataTransf[i]);
        }

        this.setState({
            data: dataTransf
        });

    }
    
    maxCount() {
        let data = this.state.data;
        let max = 0;

        for(let i=0; i<data.length; i++) {
            if(data[i] > max) {
                max = data[i];
            }
        }
        return max;
    }

    averageCount() {
        let data = this.state.data;
        let sum = 0;

        for(let i=0; i<data.length; i++) {
            sum += data[i];
        }
        return (sum / data.length);

    }

  render() {
    return (
      <LineChart
        width={700}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 25,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="people" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

export default TrendChart; 