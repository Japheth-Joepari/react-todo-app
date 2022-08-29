import Item from "./Item"

const ItemList = ({todo, handleDelete, handleCheckedItem}) => {
    return(
        <ol>
            {todo.map((todos, index) => {
                return(
                    <Item key={index}
                        id={todo[index].id}
                        todos={todo[index].value}
                        handleDelete={() => handleDelete(todo[index].id)}
                        handleCheckedItem={() => handleCheckedItem(todo[index].id)}
                    />
                )
            })}
        </ol>  
    )
}
export default ItemList