import React from 'react'
import AddWineFront from './AddWineFront'
import AddWineBack from './AddWineBack'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: 0,
        review: '',
        purchasedOn: '',
        showFront: true
    }

    render(){
        return(
            <div className='card'></div>
        )
    }

}