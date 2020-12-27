import React from 'react'
import Card from './Card'
import AddWineForm from './Form/AddWineFormContainer'

export default class CardContainer extends React.Component {

    render(){
        return(
            <div className='card-container'>
                <ul className='card-container__list'>
                    <AddWineForm addWine={this.props.addWine}/>
                    {this.props.wines.map((wine) => <Card key={wine.id} {...wine}/>)}
                </ul>
            </div>
        )
    }
}