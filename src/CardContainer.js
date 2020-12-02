import React from 'react'
import Card from './Card'
export default class CardContainer extends React.Component {

    state = {
        wines: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/wines')
            .then(res => res.json())
            .then(wineList => this.setState({
                wines: wineList
            }))
    }

    render(){
        // console.log(this.state.wines)
        return(
            <div id='card-container'>
                <ul>
                    {this.state.wines.map((wine, i) => <li key={i}><Card {...wine}/></li>)}
                </ul>
            </div>
        )
    }
}