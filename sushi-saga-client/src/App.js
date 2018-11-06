import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushis: []
  }

  componentDidMount() {
    return fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState( {sushis: sushis} ))
  }

  render() {

    const { sushis } = this.state 
    return (
      <div className="app">
        <SushiContainer sushis={sushis}  />
        <Table />
      </div>
    );
  }
}

export default App;