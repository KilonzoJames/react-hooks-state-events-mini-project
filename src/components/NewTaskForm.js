import {React, useState} from "react";

function NewTaskForm({CATEGORIES, tasks, handleAddTask}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    console.log(formData);
  }

  function onTaskFormSubmit(event){
    event.preventDefault();
    const updatedTasks = [...tasks,formData];
    handleAddTask(updatedTasks);
    setFormData({
      text: "",
      category: "",
    })
  }

  return (
    <form onSubmit={onTaskFormSubmit}className="new-task-form">
      <label>
        Details
        <input            
        onChange={handleChange}
        type="text" 
        name="text"
        value={formData.text} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {CATEGORIES.map((category) => (
             category !== "All" && 
            (<option key={category} value={category}>
              {category}
            </option>)
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
