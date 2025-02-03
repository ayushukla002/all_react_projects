import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);      // State to hold the list of todos
  const [input, setInput] = useState('');      // State to hold the current input value

  // Function to add a new todo
  const handleAddTodo = () => {
    if (input.trim()) {                        // Check if input is not empty
      setTodos([...todos, input]);             // Add the new todo to the list
      setInput('');                            // Clear the input field
    }
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove the todo at the given index
    setTodos(newTodos);                                   // Update the todos state
  };

  // Function to edit a todo
  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];          // Get the todo to edit
    setInput(todoToEdit);                     // Set it in the input field for editing
    handleDeleteTodo(index);                  // Remove the old todo from the list
  };

  return (
    <div className='todo_container'>
      <input
        type="text"
        placeholder='Enter Your Task'
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state as user types
      />
      <button className='btn' onClick={handleAddTodo}>Add</button> {/* Button to add todo */}
      <ul>
        {todos.map((item, index) => (          // Loop through todos to display them
          <li className='lists' key={index}>
            {item}
            <button className='btn' onClick={() => handleEditTodo(index)}>Edit</button>   {/* Edit button */}
            <button className='btn' onClick={() => handleDeleteTodo(index)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
