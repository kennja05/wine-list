const CardBack = (props) => {
    //using updated_at timestamp to allow for future updates
    //without
    const {winery, varietal, review, updated_at, price} = props
    return(
        <div className='card-back'>
            <div className='card__content'>
                <p>{winery} | {varietal}</p>
                <p>{review}</p>
                <p>Price: ${price}</p>
                <p>Reviewed On: {formattedDate(updated_at)}</p>
            </div>
        </div>
    )
}

function formattedDate (dateString){
    const res = dateString.slice(0,10).split('-')
    res.push(res.shift())
    return res.join('/')
}

export default CardBack