import note from '../../assets/clipboard.svg';
import styles from '../todoEmpty/TodoEmpty.module.css';

export function TodoEmpty() {
  return (
    <main className={styles.todoEmpty}>

      <img src={note} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p> Crie tarefas e organize seus itens a fazer</p>
    </main>
  );
}