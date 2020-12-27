const AddWineFront = props => {
    console.log(props)
    return(
        <div id='add-wine-form'>
            <p>Add a New Wine!</p>
            <form>
                <p>
                    <label>Winery</label>
                    <input id='winery' type='text' placeholder='Winery'/>
                </p>
                <p>
                    <label>Varietal</label>
                    <input id='varietal' type='text' placeholder='Varietal' />
                </p>
                <p>
                    <label>Cost</label>
                    <input id='cost' type='number' placeholder='0' />
                </p>
                <p>
                    <label for='review'>Review</label>
                    <textarea id='review' type='textbox' /> 
                </p>
            </form>
        </div>
    )
}

export default AddWineFront