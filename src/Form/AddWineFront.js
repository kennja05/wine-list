const AddWineFront = props => {
    console.log(props)
    const {handleChange, winery, varietal, varietals, price, review} = props
    return(
        <div id='add-wine-form'>
            <form>
                <p>
                    <label>Winery</label>
                    <input onChange={handleChange} value={winery} name='winery' type='text' placeholder='Winery'/>
                </p>
                <p>
                    <label>Varietal</label>
                    <input onChange={handleChange} value={varietal} type='text' list='varietals' placeholder='Varietal'/>
                    <datalist id='varietals'>
                        {listVarietals(varietals)}
                    </datalist>
                </p>
                <p>
                    <label>Purchase Price ($)</label>
                    <input onChange={handleChange} value={price} name='price' type='number' placeholder='Purchase Price ($)'/>
                </p>
                <p>
                    <label>Review<span> ({review.length}/75)</span></label>
                    <textarea onChange={handleChange} value={review} name='review' type='textbox' placeholder='Review'/> 
                </p>
                <div href='#'>Add Wine</div>
            </form>
        </div>
    )
}

function listVarietals(varietalsArray){ 
    return varietalsArray.map((x, i) => <option key={i}>{x.name}</option>)
}

export default AddWineFront