import styles from '../newTask/NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <form className={styles.newTaskForm}>
      <input placeholder="Adicione uma nova tarefa"
        type="text" />
      <button type="submit">
        <div className={styles.containerButton}>
          Criar
          <PlusCircle size={16} />
        </div>
      </button>
    </form>


  );
}