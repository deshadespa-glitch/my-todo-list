import { useState } from "react";
import styles from "./Task.module.css";

export default function Task({ id, title, deleteTask }) {
  return (
    <li className={styles.task}>
      <input type="checkbox" />
      {title}
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
}
