export type TodoProps = {
    todo: {
      id: number;
      text: string;
      category: string;
      isCompleted: boolean;
    },
    completeTodo(id: number): void,
    removeTodo(id: number): void
}


const Todo = ({todo, removeTodo, completeTodo}: TodoProps) => {
  return(
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
          </div>
        </div>
  )
}

export default Todo