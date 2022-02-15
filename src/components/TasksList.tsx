import React from "react";
import { ITask } from "../Interface";
import "../styles/Todo.css";
interface IProps{
  tasks: ITask[],
  callback: (selected: number) => void,
  count: number
}

const TasksList: React.FC<IProps> = (props) => {
  const {tasks, callback, count} = props
  return (
    <div className="todo-content">
      <p className="todo-content__desc">
        There are <span className="undone-tasks">{`${count || 0} `}</span> tasks left out of {`${tasks.length || 0} `} 
        tasks
      </p>
      <ul className="todo-content__list">
        {tasks&& tasks.map((task:ITask, index: number)=>{
          let status = task.status ? "line-through" : "none"
          return <li style={{textDecoration: status}} key={index} onClick={()=>callback(index)}>{task.name}</li>
        })}
      </ul>
    </div>
  );
};

export default TasksList;
