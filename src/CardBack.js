const CardBack = (props) => {
    return(
        <div className='card-back'>
            <div className='card__content'>
                {props.winery}
                {props.varietal}
                {props.review}
            </div>
        </div>
    )
}

export default CardBack