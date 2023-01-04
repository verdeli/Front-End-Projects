import styles from '../newTask/NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';

interface NewTaskProps {
  handleCreateNewTask: (e: FormEvent) => void,
}

export function NewTask({ handleCreateNewTask }: NewTaskProps) {

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input placeholder="Adicione uma nova tarefa"
        type="text"
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