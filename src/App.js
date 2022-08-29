import { Component } from 'react'
import './App.css'
import AddItems from './AddItems'
import ItemList from './ItemList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos : [],
      completed : {},
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({handleChanges : event.target.value})
  }
  
  handleClick = (event) => {
    event.preventDefault()
    const { handleChanges, todos } = this.state

    // checks if input is received
    if(this.state.handleChanges){

    //creates automatic id
      const checkID = this.state.todos.length > 0 ?
      this.state.todos.length - 1 + 1 :0;
      
      const handleChanges = {
        id : checkID,
        value: this.state.handleChanges,
      }

      //updates the todo
      const todos = this.state.todos
      todos.push(handleChanges) 
      console.log(todos);
    }

    this.setState({handleChanges : ''})
  }

  handleDeleteItem = (key) => {
    const todos = this.state.todos
    const deleteTodo = todos.filter((todo) => todo.id !== key) 
    this.setState({todos: deleteTodo})
    // console.log(deleteTodo);
  }

  handleCheckedItem = (key,e) => {
    this.setState(state => ({
      completed: { ...state.completed, [key]: !state.completed[key] }
    }));
    console.log(this.state.completed);
  }

  
  render(){
    const { todos, handleChanges } = this.state
    const {handleClick, handleChange, handleDeleteItem, handleCheckedItem} = this
    return(
      <div className='mv9'>
        <AddItems value={handleChanges}
          handleChange={handleChange} 
          handleClick={handleClick}
        />
        <ItemList todo={todos} 
        handleDelete={handleDeleteItem}
        handleCheckedItem={handleCheckedItem}/>
      </div>
    )
  }
}
export default App