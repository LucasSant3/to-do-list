import React, {useState} from 'react'

type TodoFormProps = {
  addTodo(value: string, category: string): void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if(!value || !category) return;
      addTodo(value, category)
      setValue("")
      setCategory("")
    }

  return <div className='todo-form'>
    <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite o Titulo"
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  </div>
};

export default TodoForm;