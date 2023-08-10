import {React} from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, selectedCategory}) {

  const filteredTasks = selectedCategory && selectedCategory !== "All"
    ? tasks.filter(task => task.category === selectedCategory)
    : tasks; 
  function onDelete(taskText){
    const newList = tasks.filter((task) => task !== taskText);
    setTasks(newList)
  }
  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.text} task={task} onDelete={() => onDelete(task)}/>
      ))}
    </div>
  );
}

export default TaskList;
