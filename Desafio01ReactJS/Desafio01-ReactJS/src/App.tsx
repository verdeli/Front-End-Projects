import './global.css';

import styles from './App.module.css';
import { Header } from './components/header/Header';
import { NewTask } from '/Users/verde/RocketSeat/Vite/Desafio01ReactJS/Desafio01-ReactJS/src/components/newTask/NewTask';
import { TaskInProgress } from './components/showTasks/TaskInProgress';
import { TodoEmpty } from './components/todoEmpty/TodoEmpty';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <TaskInProgress />
        <TodoEmpty />
      </div>
    </div>
  )
}

