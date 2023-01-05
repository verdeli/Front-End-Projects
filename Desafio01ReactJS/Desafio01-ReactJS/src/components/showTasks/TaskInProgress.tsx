import styles from '../showTasks/TaskInProgress.module.css';


interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TaskInProgressProps {
  todos: Task[],
}

export function TaskInProgress({ todos }: TaskInProgressProps) {
  const taskDone = todos.filter(element => element.isCompleted === true).length;
  return (
    <div className={styles.taskInProgress}>
      <div className={styles.createdTask}>
        <strong>Tarefas criadas </strong>
        <span>{todos.length}</span>
      </div>
      <div className={styles.doneTask}>
        <strong>Concluídas </strong>
        <span>{taskDone} de {todos.length}</span>
      </div>
    </div>
  );
}