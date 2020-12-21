import React from 'react'
import Card from './Card'

export default class CardContainer extends React.Component {

    render(){
        // console.log(this.state.wines)
        const example = {winery: 'Winery', varietal: 'Varietal', rating: '10', purchase_date: Date.now().toString(), review: 'Review your purchase!'}
        return(
            <div className='card-container'>
                <ul className='card-container__list'>
                    <Card {...example}/>
                    {this.props.wines.map((wine) => <Card key={wine.id} {...wine}/>)}
                </ul>
            </div>
        )
    }
}