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

    render(){
        return(
            <div className='card'>
                <AddWineFront />
            </div>
        )
    }

}