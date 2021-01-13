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
        const name = e.target.name;
        switch (name){
            case 'review' : 
                this.handleReviewChange(e)
                break;
            case 'winery' : 
            case 'varietal' :
                this.handleWineryVarietalChange(e)
                break;
            case 'price':
            case 'rating':
                this.handlePriceRatingChange(e)
                break;
            default :
                break;
        };
    };

    handleReviewChange = (e) => {
        const value = e.target.value
        if (value.length <= 75){
            this.setState({
                review: value
            })
        }
    }

    handleWineryVarietalChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (value.length <= 25){
            this.setState({
                [name]: value
            })
        }
    }

    handlePriceRatingChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'rating'){
            if (value >= 0 && value <= 10) {
                this.setState({
                    rating: value
                })
            }
        } else {
            if (value >= 0){
                this.setState({
                    price: value
                })
            }
        }
    }

    render(){
        return(
            <div className='card'>
                <AddWineFront {...this.state} handleChange={this.handleChange} handleSubmit={this.submitForm}/>
            </div>
        );
    };

};