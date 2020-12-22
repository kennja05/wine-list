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
        const {showFront} = this.state
        return(
            <div className='card'>
                {this.state.showFront ? <AddWineFront /> : <AddWineBack />}
            </div>
        )
    }

}