import React, { useState } from "react";
import classes from "../styles/TaskList.module.css";
import { FiCircle, FiStar } from "react-icons/fi";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false,
      priority: "",
      date: "",
    };
    setTasks((prev) => [...prev, newTask]);
    setTask("");
  }

  return (
    <div className={classes.tasklist}>
      <div className={classes.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add a task</button>
      </div>
      {tasks.map((task) => (
        <li key={task.id} className={classes.taskItem}>
          <span className={classes.circle}>
            <FiCircle size={20} />
          </span>{" "}
          <span className={classes.taskText}>{task.name}</span>
          <span className={classes.star}>
            <FiStar size={20} />
          </span>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
