const AddWineFront = props => {
    const {handleChange, winery, varietals, price, review} = props
    console.log(varietals)
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
                    {/* <select name='varietal' value={varietal}>
                        <optgroup label='Red Wines'>
                            <option value='Merlot'>Merlot</option>
                        </optgroup>
                        <optgroup label='White Wines'>
                            <option value='Chardonnay'>Chardonnay</option>
                        </optgroup>
                    </select> */}
                </p>
                {/* <p>
                    <label>Varietal</label>
                    <input onChange={handleChange} value={varietal} name='varietal' type='text' placeholder='Varietal' />
                </p> */}
                <p>
                    <label>Purchase Price</label>
                    <input onChange={handleChange} value={price} name='price' type='number' placeholder='0' />
                </p>
                <p>
                    <label>Review</label>
                    <textarea onChange={handleChange} value={review} name='review' type='textbox' /> 
                    <span>{review.length} / 75</span>
                </p>
            </form>
        </div>
    )
}

export default AddWineFront