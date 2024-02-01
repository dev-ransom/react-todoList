import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return
    addTodo(value);
    setValue("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="what is the task today?" value={value} onChange={(e) => setValue (e.target.value)}/>
      <button type="submit" className="todo-btn">Add Text</button>
    </form>
  )
}

export default TodoForm