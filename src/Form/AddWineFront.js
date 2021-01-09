const AddWineFront = props => {
    const {handleChange, handleSubmit, winery, varietal, varietals, price, review, rating} = props
    return(
        <div id='add-wine-form'>
            <form>
                <p>
                    <label>Winery</label>
                    <input onChange={handleChange} value={winery} name='winery' type='text' placeholder='Winery'/>
                </p>
                <p>
                    <label>Varietal</label>
                    <input onChange={handleChange} value={varietal} name='varietal' type='text' list='varietals' placeholder='Varietal'/>
                    <datalist id='varietals'>
                        {listVarietals(varietals)}
                    </datalist>
                </p>
                <p id='price-rating-inputs'>
                    <label>Purchase Price ($)</label>
                    <input onChange={handleChange} value={price} name='price' type='number' placeholder='Price ($)'/>
                    <label>Rating</label>
                    <input onChange={handleChange} value={rating} name='rating' type='number' placeholder='Rating' />
                </p>
                <p>
                    <label>Review<span> ({review.length}/75)</span></label>
                    <textarea onChange={handleChange} value={review} name='review' type='textbox' placeholder='Review'/> 
                </p>
                <div onClick={handleSubmit}>Add Wine</div>
            </form>
        </div>
    )
}

function listVarietals(varietalsArray){ 
    return varietalsArray.map((x, i) => <option key={x.id}>{x.name}</option>)
}

export default AddWineFront