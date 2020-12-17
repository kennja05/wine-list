const CardBack = (props) => {
    return(
        <div className='card-back'>
            <p className='review'>
                {props.review}
            </p>
        </div>
    )
}

export default CardBack