import React,{ createContext, useReducer, useEffect } from "react";
import { atcAddTodo } from "../actions/todoAction";
import { ITodoState, todoReducer } from "../reducers/todoReducer";
interface ITodoProvider{
  children: React.ReactNode
}
interface ITodoContext{
  todoState: ITodoState,
  addTodo: (task: string) => void
}
const todoDefault = {
  task: '',
  tasks: []
}
  export const TodoContext = createContext<ITodoContext>({todoState: todoDefault, addTodo: ()=>{}});

const TodoContextProvider = ({ children }: ITodoProvider) => {
  const [todoState, dispatch] = useReducer(todoReducer, todoDefault);

  //Add todo
  const addTodo = (task: string) => dispatch(atcAddTodo(task))

  //Context data
  const todoContextData = {todoState, addTodo};

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
