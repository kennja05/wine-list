import React from 'react'
import AddWineFront from './AddWineFront'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: 0,
        review: '',
        varietals: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/varietals')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    submitForm = () => {
        // const {addWine} = this.props
        console.log('Added wine')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state.review.length)
        return(
            <div className='card'>
                <AddWineFront {...this.state} handleChange={this.handleChange}/>
            </div>
        )
    }

}