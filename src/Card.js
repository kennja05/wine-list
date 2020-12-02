import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends React.Component {

    state = {
        showFront: true
    }

    flipCard = () => {
        this.setState({
            showFront: !this.state.showFront
        })
    }

    render(){
        const {showFront} = this.state
        return(
            <div className='card' onClick={this.flipCard}>                
                {showFront && <CardFront />}
                {!showFront && <CardBack />}
            </div>
        )
    }

}