import styles from '../newTask/NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';

interface NewTaskProps {
  handleCreateNewTask: (e: FormEvent) => void,
  handleNewTaskDescription: (event: ChangeEvent<HTMLInputElement>) => void,
  taskDescription: string,
}

export function NewTask({ handleCreateNewTask, handleNewTaskDescription, taskDescription }: NewTaskProps) {

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={taskDescription}
        onChange={handleNewTaskDescription}
        required
      />
      <button type="submit">
        <div className={styles.containerButton}>
          Criar
          <PlusCircle size={16} />
        </div>
      </button>
    </form>


  );
}