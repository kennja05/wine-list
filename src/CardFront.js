const CardFront = (props) => {
    console.log(props.purchase_date)
    const {winery, varietal, rating, purchase_date} = props
    return(
        <div className='card--front'>
            <p>{winery}</p>
            <p>{varietal}</p>
            <p>{formattedDate(purchase_date)}</p>
            {/* TODO: wine-searcher api for average cost
            <p>AverageCost</p> */}
            <p>{formattedRating(rating)}</p>
        </div>

    )
}

function formattedDate (dateString){
    const res = dateString.slice(0,10).split('-')
    res.push(res.shift())
    return res.join('/')
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
    return res
}

export default CardFront