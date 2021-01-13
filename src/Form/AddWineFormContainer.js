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
        if (e.target.name === 'review'){
           this.handleReviewChange(e)
        } else if (e.target.name === 'winery' || e.target.name === 'varietal'){
            this.handleWineryVarietalChange(e)
        } else if (e.target.name === 'price' || e.target.name === 'rating') {
            this.handlePriceRatingChange(e)
        };
    };

    handleReviewChange = (e) => {
        if (e.target.value.length <= 75){
            this.setState({
                review: e.target.value
            })
        }
    }

    handleWineryVarietalChange = e => {
        if (e.target.value.length <= 25){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handlePriceRatingChange = e => {
        if (e.target.name === 'rating'){
            if (e.target.value >= 0 && e.target.value <= 10) {
                this.setState({
                    rating: e.target.value
                })
            }
        } else {
            if (e.target.value >= 0){
                this.setState({
                    price: e.target.value
                })
            }
        }
    }

    render(){
        console.log(this.state.varietal)
        return(
            <div className='card'>
                <AddWineFront {...this.state} handleChange={this.handleChange} handleSubmit={this.submitForm}/>
            </div>
        );
    };

};