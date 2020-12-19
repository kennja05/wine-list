const CardBack = (props) => {
    const {winery, varietal, review, purchase_date} = props
    return(
        <div className='card-back'>
            <div className='card__content'>
                <p>{winery} | {varietal}</p>
                <p>{review}</p>
                {formattedDate(purchase_date)}
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