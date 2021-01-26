import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

// import Context to Update Theme of Header
import { ThemeContext } from './components/ThemeContext'

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  // Catch Provider Context from ThemeMode
  const { theme } = useContext(ThemeContext)
  // console.log(theme);

  // Catch Context inside ProviderContext
  const { isLightMode, light, dark } = theme

  // Create Var to contain Style inside Context
  const style = isLightMode ? light : dark;


  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}>
      <TextField style={ style }
        className='TextField'
        variant='outlined'
        placeholder='Add todo'
        margin='normal'
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
