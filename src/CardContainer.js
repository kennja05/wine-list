import React from 'react'
import Card from './Card'
export default class CardContainer extends React.Component {



    render(){
        return(
            <div className='card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}