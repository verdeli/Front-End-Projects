import './global.css';

import styles from './App.module.css';
import { Header } from './components/header/Header';
import { NewTask } from '/Users/verde/RocketSeat/Vite/Desafio01ReactJS/Desafio01-ReactJS/src/components/newTask/NewTask';
import { TaskInProgress } from './components/showTasks/TaskInProgress';
import { TodoEmpty } from './components/todoEmpty/TodoEmpty';
import { Todo } from './components/todo/Todo';
import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {

  const [todos, setTodos] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      description: taskDescription,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
  }

  function handleDeleteTask(id: string) {
    const deletedTask = todos.filter(element => element.id !== id);
    setTodos(deletedTask);
  }

  function updateTask(task: Task[]) {
    setTodos(task);
  }

  function handleNewTaskDescription(event: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(event.target.value);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask handleCreateNewTask={handleCreateNewTask} handleNewTaskDescription={handleNewTaskDescription} />
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

