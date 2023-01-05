import styles from '../todo/Todo.module.css';
import { Trash } from 'phosphor-react';


interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface ToDoProps {
  todos: Task[],
  handleDeleteTask: (id: string) => void,
  onUpdateTask: (task: Task[]) => void,
}

export function Todo({ todos, handleDeleteTask, onUpdateTask }: ToDoProps) {

  function handleCheckTask(id: string) {
    const taskUpdated = todos.reduce((acumulador: Task[], atual) => {
      if (atual.id === id) {
        return [...acumulador, { ...atual, isCompleted: !atual.isCompleted }]
      }
      return [...acumulador, atual];
    }, []);
    onUpdateTask(taskUpdated);
  }

  return (
    <>
      {
        todos.map(element => {
          return (
            <main key={element.id} className={styles.todo}>
              <input type="checkbox" checked={element.isCompleted} onChange={() => handleCheckTask(element.id)} />
              <p>{element.description}</p>
              <button onClick={() => handleDeleteTask(element.id)} >
                <Trash size={14} />
              </button>
            </main>
          )
        })
      }
    </>
  );
}