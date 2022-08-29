const AddItems = ({handleChanges, handleChange, handleClick}) => {
    return(
        <div className="pa2-l">
            <form className="bg-red mw6 center pa4 br2-ns ba b--black-10" > 
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f9 f9-ns mb3 white tc">Task Manager</legend>
                    <div className="cf">

                        <input className="f6 f5-l input-reset bn fl black-80 
                        bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                        placeholder="Enter your todo" type="search" id='todoInput'
                        onChange={handleChange} value={handleChanges} />
                        
                        
                        <button className="f6 f5-l button-reset fl pv3 grow
                        tc bn bg-animate bg-black-70 hover-bg-black white pointer
                        w-100 w-25-m w-20-l br2-ns br--right-ns" 
                        onClick={handleClick}>
                        <i style={{ fontSize:"15px" }} className="fa fa-send-o"> Add todo </i>
                           
                         </button>
                         
                    </div>
                </fieldset>
            </form>
    
        </div>
    )
}
 
export default AddItems