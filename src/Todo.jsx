import React from 'react';

function Todo({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </div>
  );
}

export default Todo;
