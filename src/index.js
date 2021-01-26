import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import ButtonTest from './components/button.js';

// import Context Provider
import ThemeContextProvider from './components/ThemeContext'
// import Theme Toggle to update Feild
import ThemeToggle from './components/ThemeToggle'

import './style.css';
const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]); // destructering
  const [isDisabled, setIsDisabled] = useState(false); // Set Begin Value
  
  // Tao State cho isColor 
  const [isColor, setIsColor] = useState(true)

  
  return (
    <div className='App' style={{ background: isColor? "red" : "purple" }}>
      <ThemeContextProvider>
      <Typography className='h1' component='h1' variant='h2'>
        Todos
        <span>Get things done, one item at a time.</span>
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />

      <ButtonTest isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      
      <br />
      
      <ThemeToggle />
      <button onClick={() => { setIsColor(!isColor) }}>Set Color</button>
      
      </ThemeContextProvider>
      
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);