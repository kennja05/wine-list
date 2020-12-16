import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends React.Component {

    state = {
        showFront: true
    }

    // flipCard = () => {
    //     this.setState({
    //         showFront: !this.state.showFront
    //     })
    // }

    render(){
        // const {showFront} = this.state
        // console.log(this.props)
        return(
            <li>
                <div className='card'>
                    <div className='card-inner'>                
                        <CardFront {...this.props}/>
                        <CardBack />
                    </div>
                </div>  
            </li>
        )
    }

}