import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const generateProps = () => {
  let props = {}
  let values = []
  for (let i = 0; i < 10; i++) {
    let row = []
    for (let j = 0; j < 10; j++) {
    row.push('#F00');
    }
    values.push(row) 
  }
  props.values = values
  return props
}

Matrix.defaultProps = generateProps()
