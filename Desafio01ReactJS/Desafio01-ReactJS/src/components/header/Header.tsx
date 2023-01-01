import rocket from '../../assets/rocket.svg';
import toDo from '../../assets/toDo.svg';
import styles from '../header/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt='rocketzão' />
      <img src={toDo} alt='Lista de Tarefas' />
    </header>
  );
}