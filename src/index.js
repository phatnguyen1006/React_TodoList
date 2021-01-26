import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import ButtonTest from './components/button.js';

// import Context Provider
import ThemeContextProvider from './components/ThemeContext';
// import Theme Toggle to update Feild
import ThemeToggle from './components/ThemeToggle';

// import SpanTheme Provider
import SpanThemeProvider from './components/SpanTheme';
// import SpanThemeButton
import SpanThemeButton from './components/SpanThemeButton';

// import Header have Typography inside
import Header from './components/head'

import './style.css';


const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]); // destructering
  const [isDisabled, setIsDisabled] = useState(false); // Set Begin Value
  
  // Tao State cho isColor 
  const [isColor, setIsColor] = useState(true)


  return (
    <div className='App' style={{ background: isColor? "red" : "purple" }}>
      <ThemeContextProvider>

      <SpanThemeProvider>
          
      <Header />

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
          
      <SpanThemeButton />
          
      <ThemeToggle />
          
      <button onClick={() => { setIsColor(!isColor) }}>Set Color</button>
          
      </SpanThemeProvider>
        
      </ThemeContextProvider>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);