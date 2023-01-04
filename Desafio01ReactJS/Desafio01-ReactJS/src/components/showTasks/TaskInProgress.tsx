import styles from '../showTasks/TaskInProgress.module.css';


interface Task {
  id: string;
  description: string;
}

interface TaskInProgressProps {
  todos: Task[],
}

export function TaskInProgress({ todos }: TaskInProgressProps) {
  return (
    <div className={styles.taskInProgress}>
      <div className={styles.createdTask}>
        <strong>Tarefas criadas </strong>
        <span>{todos.length}</span>
      </div>
      <div className={styles.doneTask}>
        <strong>Concluídas </strong>
        <span>0 de {todos.length}</span>
      </div>
    </div>
  );
}