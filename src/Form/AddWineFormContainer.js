import React from 'react'
import AddWineFront from './AddWineFront'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: 0,
        review: '',
    }

    submitForm(){
        // const {addWine} = this.props
        console.log('Added wine')
    }

    handleChange(e){
        console.log(e.target.value)
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
    }

    render(){
        console.log(this.state.winery)
        return(
            <div className='card'>
                <AddWineFront {...this.state} handleChange={this.handleChange}/>
            </div>
        )
    }

}