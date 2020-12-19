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
        const example = {winery: 'Winery', varietal: 'Varietal', rating: '10', purchase_date: Date.now().toString(), review: 'Review your purhcase!'}
        return(
            <div className='card-container'>
                <ul className='card-container__list'>
                    <Card {...example}/>
                    {this.state.wines.map((wine) => <Card key={wine.id} {...wine}/>)}
                </ul>
            </div>
        )
    }
}