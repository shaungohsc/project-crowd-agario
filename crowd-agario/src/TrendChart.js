import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
        const times = [
            '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
            '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
            '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
            '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

        for(let i=0; i<temp.length; i++) {
            dataTransf[i] = {hour: times[i], people: temp[i].length};
            // console.log(dataTransf[i]);
        }

        this.setState({
            data: dataTransf
        });

    }

  render() {
    if (this.state.data.length > 0) {
    return (
      <AreaChart
        width={510}
        height={300}
        data={this.state.data}
        margin={{
          top: 20, right: 0, left: 0, bottom: 0,
        }}
      >
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Area type="monotone" dataKey="people" fillOpacity={1} fill="url(#colorUv)"/>
      </AreaChart>
    );
    }
    return (
        <AreaChart
            width={510}
            height={300}
            data={[]}
        ></AreaChart>
    )
  }
}

export default TrendChart; 