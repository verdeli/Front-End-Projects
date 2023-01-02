import styles from '../todo/Todo.module.css';
import { Trash } from 'phosphor-react';

export function Todo() {
  return (
    <main className={styles.todo}>
      <input type="checkbox"  />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={14} />
      </button>
    </main>
  );
}