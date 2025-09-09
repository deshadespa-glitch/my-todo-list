import { useState } from "react";
import styles from "./Task.module.css";

export default function Task({ id, title, deleteTask, updateTask }) {
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  function handleOnEditTitleChange(event) {
    setEditTitle(event.target.value);
  }

  if (!edit) {
    return (
      <li className={styles.task}>
        <input type="checkbox" />
        {title}
        <button onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    );
  } else {
    return (
      <li className={styles.task}>
        <input type="checkbox" />
        <input
          type="text"
          value={editTitle}
          onChange={handleOnEditTitleChange}
        />
        <button
          onClick={() => {
            updateTask(id, editTitle);
            setEdit(!edit);
          }}
        >
          Update
        </button>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    );
  }
}
