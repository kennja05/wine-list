const AddWineFront = props => {
    const {handleChange, winery, varietals, price, review} = props
    console.log(varietals)
    return(
        <div id='add-wine-form'>
            <form>
                <p>
                    <label>Winery</label>
                    <input onChange={handleChange} value={winery} name='winery' type='text' placeholder='Winery'/>
                </p>
                <p>
                    <label>Varietal</label>
                    <input type='text' list='varietals' />
                    <datalist id='varietals'>
                        {/* {varietals.sort((a,b) => a.color[0] - b.color[0]).map((varietal,i) => <option key={i}>{varietal.name}</option>)} */}
                        {sortVarietals(varietals)}
                    </datalist>
                </p>
                <p>
                    <label>Purchase Price</label>
                    <input onChange={handleChange} value={price} name='price' type='number'/>
                </p>
                <p>
                    <label>Review<span> ({review.length}/75)</span></label>
                    <textarea onChange={handleChange} value={review} name='review' type='textbox' /> 
                </p>
                <div href='#'>Add Wine</div>
            </form>
        </div>
    )
}

function sortVarietals(varietalsArray){
    return varietalsArray.sort((a, b) => a.color - b.color).map((x, i) => <option key={i}>{x.name}</option>)
}

export default AddWineFront