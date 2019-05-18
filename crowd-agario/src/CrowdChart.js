import React, { Component } from 'react';
import * as Recharts from 'recharts'

const {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ReferenceArea} = Recharts;

const data = [{x: 100, y: 200, z: 83}, {x: 120, y: 100, z: 30},
                  {x: 170, y: 300, z: 22}, {x: 140, y: 250, z: 35},
                  {x: 150, y: 400, z: 5}, {x: 110, y: 280, z: 3}]

class CrowdChart extends Component{
	render () {
  	return (
    	<ScatterChart width={470} height={470} margin={{top: 10, right: 10, bottom: 10, left: 10}}>
      	<CartesianGrid strokeDasharray="3 3"/>
        <XAxis domain={[0, 400]} dataKey={'x'} type="number" name='x-dim' unit='cm'/>
      	<YAxis domain={[0, 400]} dataKey={'y'} type="number" name='y-dim' unit='cm'/>
<ZAxis range={[0, 100]} dataKey={'z'} type="number" name='z-dim' unit='people'/>

        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name='A school' data={data} fill='#8884d8'/>
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    );
  }
}

export default CrowdChart;
