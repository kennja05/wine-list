import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends React.Component {

    render(){
        return(
            <li>
                <div className='card'>
                    <div className='card-inner'>                
                        <CardFront {...this.props}/>
                        <CardBack {...this.props}/>
                    </div>
                </div>  
            </li>
        )
    }

}