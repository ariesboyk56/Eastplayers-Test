import React, { useContext, useEffect, useState } from "react";
import "../styles/Todo.css";
import Header from "../components/Header";
import TasksList from "../components/TasksList";
import { ITask } from "../Interface";

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [count, setCount] = useState<number>(0);
  const handleClick = (): void => {
    if(task !== ""){
      const newTask = {name: task, status:false}
    setTasks([...tasks, newTask])
    setTask("")
    }
  };
  const toggleTask = (selected: number):void => {
    const newTasks =  tasks.map((item, index)=> {
      if(index === selected){
        return{
          ...item,
          status: !item.status
        }
      }
      return item;
    })
    setTasks(newTasks)
  }
  const showUndoneTask = ():void => {
    let count = 0
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].status === true){
        count++
      }
    }
    return setCount(count)
  }
  useEffect(()=>{
    showUndoneTask()
  }, [tasks])
  return (
    <>
      <Header title="Todo list" button />
      <div className="todo-container">
        <div className="search-todo">
          <input
            className="search-todo__input"
            type="text"
            placeholder="Search"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <div className="search-todo__btn" onClick={handleClick}>
            Add
          </div>
        </div>
        <TasksList tasks={tasks} callback={toggleTask} count={count}/>
      </div>
    </>
  );
};

export default Todo;
