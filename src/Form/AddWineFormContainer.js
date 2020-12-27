import React from 'react'
import AddWineFront from './AddWineFront'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: 0,
        review: '',
        purchasedOn: '',
    }

    submitForm(){
        const {addWine} = this.props
        console.log('Added wine')
    }

    render(){
        return(
            <div className='card'>
                <AddWineFront />
            </div>
        )
    }

}