import './global.css';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

function App() {
return(
  <div>
    <Header />

    <div className={styles.wrapper}>
    
    <Sidebar />

    <main>
      <Post author="Leo" content="Gostamos de gato!" />
      <Post author="Verdelin" content="Gatos tem seu amor próprio!" />
    </main>
  </div>


  </div>
);
}

export default App
