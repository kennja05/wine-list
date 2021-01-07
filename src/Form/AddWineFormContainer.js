import React from 'react'
import AddWineFront from './AddWineFront'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: '',
        review: '',
        varietals: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/varietals')
            .then(res => res.json())
            .then(varietalList => this.setState({
                varietals: varietalList
            }));
    };

    submitForm = (e) => {
        e.preventDefault()
        const {winery, varietal, price, review} = this.state;
        console.log('Added wine')
        this.setState({
            winery: '',
            varietal: '',
            price: '',
            reivew: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        console.log(this.state.varietal)
        return(
            <div className='card'>
                <AddWineFront {...this.state} handleChange={this.handleChange}/>
            </div>
        );
    };

};