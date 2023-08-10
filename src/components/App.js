import {React,useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const handleAddTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };console.log(tasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} tasks={tasks} handleAddTask={handleAddTask}/>
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
