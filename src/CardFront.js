const CardFront = (props) => {
    const {winery, varietal, rating} = props
    return(
        <div className='card-front'>
            <div className='card__content'>
            <p>{winery}</p>
            <p>{varietal.name}</p>
            {/* TODO: wine-searcher api for average cost
            <p>AverageCost</p> */}
            <p>{formattedRating(rating)}</p>
            </div>
        </div>

    )
}

function formattedRating(int){
    const star = '⭐'
    let res = ''
    if (int === 0){
        return '0'
    }
    for (let i = 0; i < int; i++){
        res += star
    }
    return <><span className='rating'>{res}</span><span className='rating rating-numerical'>({int}/10)</span></>
}

export default CardFront