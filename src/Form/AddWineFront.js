const AddWineFront = props => {
    const {handleChange, winery, varietal, price, review} = props
    return(
        <div id='add-wine-form'>
            <p>Add a New Wine!</p>
            <form>
                <p>
                    <label>Winery</label>
                    <input onChange={handleChange} value={winery} name='winery' type='text' placeholder='Winery'/>
                </p>
                <p>
                    <label>Varietal</label>
                    <input onChange={handleChange} value={varietal} name='varietal' type='text' placeholder='Varietal' />
                </p>
                <p>
                    <label>Purchase Price</label>
                    <input onChange={handleChange} value={price} name='price' type='number' placeholder='0' />
                </p>
                <p>
                    <label>Review</label>
                    <textarea onChange={handleChange} value={review} name='review' type='textbox' /> 
                    <span>{review.length} / 150</span>
                </p>
            </form>
        </div>
    )
}

export default AddWineFront