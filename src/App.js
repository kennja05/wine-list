import './App.css';
import React from 'react'
import CardContainer from './CardContainer'

class App extends React.Component {
  
  state = {
    wines: []
  }

  addWine = wine => {
    const {wines} = this.state
    this.setState({
      wines: [wine, ...wines]
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/wines')
        .then(res => res.json())
        .then(wineList => this.setState({
            wines: wineList
    }))
}

  render(){
    return (
      <div className="App">
        <CardContainer addWine={this.addWine} wines={this.state.wines}/>
      </div>
    );
  }
  
}

export default App;