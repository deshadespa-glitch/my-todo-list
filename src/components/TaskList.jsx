import { useState } from "react";
import Task from "./Task";
import taskStyles from "./Task.module.css";
import { v4 as uuidv4 } from "uuid";

export default function TaskList() {
  const [taskStorage, setTaskStorage] = useState([]);
  const [title, setTitle] = useState("");

  function deleteTask(id) {
    setTaskStorage((prev) => prev.filter((task) => task.id !== id));
    console.log(taskStorage);
  }

  function handleTitleOnChange(event) {
    setTitle(event.target.value);
  }

  function handleInputOnSave() {
    if (title === "") return;
    const id = uuidv4();
    setTaskStorage([...taskStorage, { id: id, taskTitle: title }]);
    setTitle("");
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleTitleOnChange}
        />
        <button onClick={handleInputOnSave}>Create</button>
      </div>
      <ul className={taskStyles.taskList}>
        {taskStorage.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.taskTitle}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
