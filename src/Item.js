 const Item = ({todos, handleDelete, handleCheckedItem, id}) => {
    return (
        // <li></li>
        <li className="pa2-l bg-light-blue mw6 center pa1  mb1" id="item">
            <div className="flex items-center">
                <input type={"checkbox"} className="tl white p1" 
                onClick={handleCheckedItem} />

                <h3 className="black center" >{todos}</h3>
                <i className="fa fa-trash-o" style={{fontSize:'24px'}} onClick={handleDelete}></i>
            </div>
        </li>
    )
}
export default Item