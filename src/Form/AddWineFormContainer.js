import React from 'react'
import AddWineFront from './AddWineFront'

export default class AddWineFormContainer extends React.Component {

    state = {
        winery: '',
        varietal: '',
        price: '',
        review: '',
        rating: '',
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
        const wine = {winery, varietal, price, review}
        fetch('http://localhost:3000/wines',{
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(wine)
          })
          .then(resp => resp.json())
          .then(wine => this.props.addWine(wine))
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
                <AddWineFront {...this.state} handleChange={this.handleChange} handleSubmit={this.submitForm}/>
            </div>
        );
    };

};