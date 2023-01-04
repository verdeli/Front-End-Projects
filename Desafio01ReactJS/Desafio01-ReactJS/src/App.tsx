import './global.css';

import styles from './App.module.css';
import { Header } from './components/header/Header';
import { NewTask } from '/Users/verde/RocketSeat/Vite/Desafio01ReactJS/Desafio01-ReactJS/src/components/newTask/NewTask';
import { TaskInProgress } from './components/showTasks/TaskInProgress';
import { TodoEmpty } from './components/todoEmpty/TodoEmpty';
import { Todo } from './components/todo/Todo';
import { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {

  const [todos, setTodos] = useState<Task[]>([]);

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: "Aprendendo ...",
      isCompleted: false,
    };
    console.log(newTask);
    setTodos([...todos, newTask]);
  }

  function handleDeleteTask(id: string) {
    const deletedTask = todos.filter(element => element.id !== id);
    setTodos(deletedTask);
  }

  function updateTask(task: Task[]) {
    setTodos(task);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask handleCreateNewTask={handleCreateNewTask} />
        <TaskInProgress todos={todos} />

        {
          (!todos.length) ? (
            <TodoEmpty />
          ) : (
            <Todo
              todos={todos}
              handleDeleteTask={handleDeleteTask}
              onUpdateTask={updateTask}
            />
          )
        }

      </div>
    </div>
  )
}

