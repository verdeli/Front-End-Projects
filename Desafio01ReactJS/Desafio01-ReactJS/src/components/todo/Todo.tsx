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

  function updateTask(id: string) {
   
  }

  return (
    <>
      {
        todos.map(element => {
          return (
            <main key={element.id} className={styles.todo}>
              <input type="checkbox" onChange={() => updateTask(element.id)} />
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