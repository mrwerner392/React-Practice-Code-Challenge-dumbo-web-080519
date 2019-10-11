import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushiIds: [],
    dollarsLeft: 100,
    displayPage: 1
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiArr => {
      this.setState({
        sushi: sushiArr
      })
    })
  }

  sushiToDisplay = () => {
    const startIndex = (this.state.displayPage * 4 - 4) % this.state.sushi.length
    // console.log("start index", startIndex);
    // console.log("sushi to display", this.state.sushi.slice(startIndex, startIndex + 4));
    return this.state.sushi.slice(startIndex, startIndex + 4)
  }

  handleMoreSushiClick = () => {
      this.setState({
        displayPage: this.state.displayPage + 1
      })
  }

  handleEatSushi = evt => {
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.id);
    // console.log(this.sushiToDisplay());
    const eatenSushi = this.sushiToDisplay().find(sushi => sushi.id === parseInt(evt.target.id))
    if (eatenSushi.price <= this.state.dollarsLeft) {
      this.eatSushi(eatenSushi);
    } else {
      alert("Not enough money!!");
    }

  }

  eatSushi = eatenSushi => {
    const sushi = this.state.sushi.map(sushi => {
      if (sushi.id === eatenSushi.id) {
        return {...sushi, eaten: true};
      } else {
        return sushi;
      }
    })
    // console.log("sushi after click", sushi);
    this.setState({
      sushi,
      eatenSushiIds: [...this.state.eatenSushiIds, eatenSushi.id],
      dollarsLeft: this.state.dollarsLeft - eatenSushi.price
    })
  }

  handleAddMoney = evt => {
    this.setState({
      dollarsLeft: this.state.dollarsLeft + parseInt(evt.target.amount.value)
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <SushiContainer sushiToDisplay={ this.sushiToDisplay() }
                        handleMoreSushiClick={ this.handleMoreSushiClick }
                        handleEatSushi={ this.handleEatSushi }
                        />
        <Table eatenSushiIds={ this.state.eatenSushiIds }
               dollarsLeft={ this.state.dollarsLeft }
               handleAddMoney={ this.handleAddMoney }
               />
      </div>
    );
  }

}

export default App;
