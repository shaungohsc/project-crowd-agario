import React, { Component } from 'react';
import * as Recharts from 'recharts';

const {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ReferenceArea} = Recharts;

class CrowdChart extends Component{

  constructor(props) {
    super(props);
  }

  // handleClick = () => {
  //   console.log(this.props.store.coordList)
  //   this.props.store.updateCoordList();
  // };

	render () {
  	return (
      <div>
    	<ScatterChart width={500} height={500} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<CartesianGrid strokeDasharray="3 3"/>
            <XAxis domain={[0, 400]} dataKey={'x'} type="number" name='x-dim' unit='cm'/>
            <YAxis domain={[0, 400]} dataKey={'y'} type="number" name='y-dim' unit='cm'/>

        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name='A school' data={this.props.store.coordList} fill='#8884d8'/>
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
         <button onClick={this.props.update}> Update </button>
      </div> 
    );
  }
}

// <ZAxis range={[30, 100]} dataKey={'z'} type="number" name='z-dim' unit='people'/>


export default CrowdChart;
