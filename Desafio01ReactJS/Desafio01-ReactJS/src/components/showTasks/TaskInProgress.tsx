import styles from '../showTasks/TaskInProgress.module.css';

export function TaskInProgress() {
  return (
    <div className={styles.taskInProgress}>
      <div className={styles.createdTask}>
        <strong>Tarefas criadas </strong>
        <span>0</span>
      </div>
      <div className={styles.doneTask}>
        <strong>Concluídas </strong>
        <span>0</span>
      </div>
    </div>
  );
}