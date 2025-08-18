import { useState } from "react";
import { useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    console.log("Text changed");
    setNewTask(event.target.value);
  };

  const handleOnClick = () => {
    console.log("Adding new task");
    // const input = document.getElementById("task-input");
    if (newTask) {
      const tasktoadd = { text: newTask, completed: false };
      setTasks([...tasks, tasktoadd]);
      setNewTask("");
    }
  };

  const handleOnEnter = (e) => {
    if (e.code === "Enter") {
      handleOnClick();
    }
  };

  useEffect(() => {
    console.log("new task added:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);

  const handleDelete = (selected_index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== selected_index)
    );
  };

  const handleSelected = (index) => {
    setSelectedTask(index);
    console.log(index);
  };

  const handleCheckChange = (checked_index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === checked_index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderListItems = () => {
    return tasks.map((task, index) => (
      <li
        onClick={() => handleSelected(index)}
        className={`task-item ${task.completed ? "completed" : ""} ${
          index === selectedTask ? "active" : ""
        }`}
      >
        <p>{task.text}</p>
        <input
          type="checkbox"
          onChange={() => handleCheckChange(index)}
          checked={task.completed}
        ></input>
        <button onClick={() => handleDelete(index)}>Delete </button>
      </li>
    ));
  };

  return (
    <>
      <input
        id="task-input"
        className="task-input"
        onChange={handleInput}
        onKeyDown={handleOnEnter}
        value={newTask}
        placeholder="Enter new task here..."
      ></input>
      <button type="button" onClick={handleOnClick}>
        New task
      </button>
      <ul>{renderListItems()}</ul>
    </>
  );
}

export default ToDoList;
