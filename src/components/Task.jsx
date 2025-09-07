import styles from "./Task.module.css";

export default function Task({ title }) {
  return (
    <li className={styles.task}>
      <input type="checkbox" />
      {title}
    </li>
  );
}
