import './global.css';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/verdeli.png',
      name: 'Verdeliiin',
      role: 'Engenheiro / Enfermeiro'
    },
    content: [ 
     {type: 'paragraph', content: 'Fala galeraaaaa 👋'},
     {type: 'paragraph', content: 'Acabei de subir para o meu profile. È um projeto que eu fiz no WLW Return, evento super massa.' },
     {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishAt: new Date('2022-05-03 22:32:25 ')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/oleoprado.png',
      name: 'Leo Prado',
      role: 'Web Developer'
    },
    content: [ 
     {type: 'paragraph', content: 'Opa!'},
     {type: 'paragraph', content: 'Sou revolucionário, quase anarquista!.' },
     {type: 'link', content: 'jane.design/'},
  ],
  publishAt: new Date('2022-12-30 22:40:25 ')
  },
];

export function App() {

  return(
  <div>
    <Header />

    <div className={styles.wrapper}>
    
      <Sidebar />

      <main>

        {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishAt={post.publishAt}
        />
        )
      })}

      </main>

    </div>

  </div>

  );
}
