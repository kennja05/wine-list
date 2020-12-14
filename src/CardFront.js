const CardFront = (props) => {
    console.log(props)
    const {winery} = props
    return(
        <div className='card--front'>
            <h1>{winery}</h1>
            <h2>My Cost</h2>
            {/* TODO: wine-searcher api for average cost */}
            <h2>AverageCost</h2>
            <h2>Year</h2>
            <h2>Rating</h2>
        </div>

    )
}

export default CardFront