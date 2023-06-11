import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  const [showActive, setShowActive] = useState(false)

  const activeTodos = todos.filter(todo => !todo.completed)
  const visibleTodos = showActive ? activeTodos : todos

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <br />

      <NewTodo
        onAdd={newTodo => setTodos([...todos, newTodo])}
      />

      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>

      <footer>{activeTodos.length} todos left</footer>
    </>
  )
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('')

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button
        onClick={() => {
          setText('')
          onAdd(createTodo(text))
        }}>
        Add
      </button>
    </>
  )
}

let nextId = 0

const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
]

function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  }
}
